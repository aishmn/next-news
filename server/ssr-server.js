const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const newsRouter = require('./routes/newsRoutes');
const commentRouter = require('./routes/commentRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const tagRouter = require('./routes/tagRoutes');
const topicRouter = require('./routes/topicRoutes');
app.prepare()
	.then(() => {
		const app = express();
		app.enable('trust proxy');

		app.use(cors());

		app.options('*', cors());
		// app.options('/api/v1/tours/:id', cors());

		// Serving static files
		app.use(express.static(path.join(__dirname, 'public')));

		// Set security HTTP headers
		app.use(helmet());

		// Development logging
		if (process.env.NODE_ENV === 'development') {
			app.use(morgan('dev'));
		}

		// Limit requests from same API
		const limiter = rateLimit({
			max: 100000,
			windowMs: 60 * 60 * 1000,
			message: 'Too many requests from this IP, please try again in an hour!'
		});
		app.use('/api', limiter);

		app.use(express.json({ limit: '10kb' }));
		app.use(express.urlencoded({ extended: true, limit: '10kb' }));
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());

		app.use(cookieParser());

		app.use(mongoSanitize());

		// Data sanitization against XSS
		app.use(xss());

		// Prevent parameter pollution
		app.use(
			hpp({
				whitelist: ['duration']
			})
		);

		app.use(compression());

		// 3) ROUTES
		app.use('/api/v1/users', userRouter);
		app.use('/api/v1/news', newsRouter);
		app.use('/api/v1/comment', commentRouter);
		app.use('/api/v1/category', categoryRouter);
		app.use('/api/v1/topic', topicRouter);
		app.use('/api/v1/tag', tagRouter);

		app.get('*', (req, res) => {
			return handle(req, res);
		});

		const port = process.env.PORT;
		const DB = process.env.DB;
		mongoose
			.connect(DB, {
				useNewUrlParser: true,
				useFindAndModify: false,
				useUnifiedTopology: true,
				useCreateIndex: true
			})
			.then(() => console.log('DB connection successful!'));

		app.listen(port, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:' + port);
		});
		app.use(globalErrorHandler);
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});

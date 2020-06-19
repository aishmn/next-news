import React, { useEffect } from 'react';
import store from '../redux/store/store';
import { Provider, useDispatch } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import setAuthToken from '../lib/setAuthToken';
import '../public/scss/Main.scss';
const MyApp = ({ Component, pageProps }) => {
	const Layout = Component.Layout ? Component.Layout : React.Fragment;
	useEffect(() => {
		if (localStorage.getItem('token')) setAuthToken(localStorage.getItem('token'));
	}, [setAuthToken]);

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

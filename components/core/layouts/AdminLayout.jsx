import { Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AdminSidebar from '../../admin/admin-sidebar/AdminSidebar';
import AdminHeader from '../../admin/admin-header/AdminHeader';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../../redux/actions/authActions';
import Alert from '../../alert/Alert';
import { setNotification } from '../../../redux/actions/notificationActions';
import setAuthToken from '../../../lib/setAuthToken';
import Router from 'next/router';
const AdminLayout = ({ children }) => {
	const [showDrawer, setShowDrawer] = useState(false);
	const clientSide = typeof window !== 'undefined';
	const is_authenticated = useSelector((state) => state.auth.is_authenticated);
	const loading = useSelector((state) => state.auth.loading);
	const user = useSelector((state) => state.auth.user);

	const dispatch = useDispatch();

	useEffect(() => {
		if (clientSide) {
			setAuthToken(localStorage.getItem('token'));
			if (!user) dispatch(loadUser());
		}
	}, [loadUser, loading]);

	if (user && !loading && is_authenticated === false) {
		dispatch(setNotification('Please Login to continue'));
		return Router.replace('/auth/signin');
	}
	if (user && user.role == 'user') {
		dispatch(setNotification('You are not authorized to access admin area, reported to the admin'));
		return Router.replace('/');
	}

	return (
		<>
			{!loading && user && user.role !== 'user' && (
				<Row>
					<Alert />
					{showDrawer && <AdminSidebar />}
					<div className="col m-0 shadow ">
						<AdminHeader setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
						<div className="mx-md-5 mx-4">{children}</div>
					</div>
				</Row>
			)}
		</>
	);
};

export default AdminLayout;

import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
	const modalRoot = document.getElementById('portal');
	return createPortal(children, modalRoot);
};

export default Portal;
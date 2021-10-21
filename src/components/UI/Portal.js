import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
	// creates a portal to a sibling node of 'root'
	const modalRoot = document.getElementById('portal');
	return createPortal(children, modalRoot);
};

export default Portal;

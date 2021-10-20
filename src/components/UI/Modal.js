import Portal from './Portal';

const Modal = ({ children }) => (
	<Portal>
		<div className='modal'>
			<div>{children}</div>
		</div>
	</Portal>
);
export default Modal;

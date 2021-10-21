import Portal from './Portal';

const Modal = ({ rocketData }) => (
	<Portal>
		<div className='modal'>
			<div>{rocketData.rocket_name}</div>
			<div>{rocketData.description}</div>
		</div>
	</Portal>
);
export default Modal;

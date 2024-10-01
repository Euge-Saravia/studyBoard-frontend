import './loadingModal.scss'

const LoadingModal = ({ isOpen }) => {
    if (!isOpen) return null
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="spinner"></div>
                <p className='modal-text'>Cargando, por favor espera...</p>
            </div>
        </div>
    )
}

export default LoadingModal
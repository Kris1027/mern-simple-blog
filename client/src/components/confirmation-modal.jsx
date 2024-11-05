function ConfirmationModal({ onClose, onConfirm }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white p-4 rounded-lg'>
                <h2>Are you sure you want to delete this article?</h2>
                <div className='flex gap-2 mt-4'>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm} className='bg-red-500 text-white px-4 py-2 rounded'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;

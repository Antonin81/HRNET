import { modalSlice } from "../../../features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../../../common/utils/hooks";

function Modal() {
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector((state) => state.isModalOpen);

    function handleClose(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        dispatch(modalSlice.actions.toggleModal(false));
    }

    return (
        isModalOpen && (
            <div id="confirmation" className="modal">
                Employee Created!
                <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close-modal"
                    onClick={(e) => {
                        handleClose(e);
                    }}
                >
                    Close
                </a>
            </div>
        )
    );
}

export default Modal;

import Button from "./Button"

function Modal({visibility, onClick}){

    return (
        <div className={`modal flex flex-col ${visibility} justify-center items-center rounded-xl shadow-2xl p-8 bg-slate-200`}>
            <p className="m-4">Are you sure you want to close the modal</p>
            <Button text={"Close"} onClick={onClick}/>
        </div>
    )
}

export default Modal
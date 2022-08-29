import './button.component.css'

function Button({children, onClickFunction, buttonType, disabledFunction}) {
    return (
        <button
                disabled={disabledFunction}
                type={buttonType}
                onClick={onClickFunction}
                className='button-component'>
            {children}
        </button>
    )
}

export {Button}

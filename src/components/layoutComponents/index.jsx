import './styles.css'



export const LayoutComponents = (props) => {
    return (
        <div className='container'>
            <div className="containerLogin">
                <div className="wrapLogin">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
import {Circle} from 'better-react-spinkit';

function Loading() {
    return (
        <center style={{display:"grid", placeItems: "center", height:"80vh"}}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
                style={{marginBottom:10, marginTop:10}}
                height={200}
                />
                <Circle color='#3CBC28' size={60} />
            </div>
        </center>
    )
}

export default Loading;

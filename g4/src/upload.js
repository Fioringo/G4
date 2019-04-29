import Axios from "axios"
const React = require('react')



class Upload extends React.Component {
    state = {
        file: null,
        oldfile: null
    }
    fileSelector = event => {
        this.setState({
            file: event.target.files[0],
            oldfile: URL.createObjectURL(event.target.files[0])
        })
    }
    
    fileUpload = () => {
        console.log(this.state.file)
        const fd = new FormData();
        fd.append('image', this.state.file, this.state.file.name);
        Axios.post("http://localhost:5001/api/upload", this.state.file)       
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelector} />
                <img src={this.state.oldfile} />
                <button onClick={this.fileUpload}> Upload </button>
            </div>
        )
    }
}
export default Upload;



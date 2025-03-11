// import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(61, 61, 61)' : 'white'
    }

    let mStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(111 111 111)' : 'white'
    }

    return (
        <div className="container p-3" style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={mStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mStyle}>
                            TextUtils is a versatile text utility tool designed to simplify text analysis and formatting. Whether you need to count words, check character length, or modify text styles, TextUtils provides a fast and efficient way to process textual data. It helps users in tasks like document preparation, content editing, and optimizing text for different platforms.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={mStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mStyle}>
                            TextUtils is completely free and accessible to everyone. It offers instant word and character count, case conversion, extra space removal, and text copying functionalities without any restrictions. Whether you're a student, writer, or professional, this tool ensures seamless text editing without the need for premium software.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={mStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mStyle}>
                            TextUtils is a web-based tool that works on all modern browsers, including Chrome, Firefox, Edge, Safari, and Opera. It is optimized for smooth performance across different devices, making it useful for various applications such as writing blog posts, social media content, essays, or preparing formatted text for official documents.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

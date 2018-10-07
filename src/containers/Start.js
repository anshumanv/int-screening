import React, { Component } from 'react';
import Auth from '../components/authButton';
import { connect } from 'react-redux';
import Quiz from '../components/Quiz'
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import { Upload, Icon, message } from 'antd';

class Start extends Component {
    
    render() {
        const Dragger = Upload.Dragger; 
        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange(info) {
              const status = info.file.status;
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
            },
          };
        
        const signedIn = this.props.signedIn;
        return(
            <div>
                {!this.props.signedIn ? <Auth />: (
                    <div className = "start-root">
                        <Link className="start-button" to={'/interview/Web'}><Button>
                            Take Test</Button>
                        </Link>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click on this box to upload your CV.</p>
                                <p className="ant-upload-hint">Begin the test once done.</p>
                            </Dragger>,
                    </div>
                )
                   
                    }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        signedIn: state.auth.signedIn
    };
};
  
const mapDisPatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Start);

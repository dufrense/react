import { Upload, message, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';


class Thing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: '',
      thingName: '',
      thingPosition: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.listThing();
  }

  render() {

    const config = {
      name: 'file',
      action: 'http://129.28.85.228:8081/thing/upload',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {

        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
          this.setState({ url: info.file.response });
          console.log(info.file);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

    config.onChange = config.onChange.bind(this);

    return (
      <React.Fragment>
        <Upload {...config}>
          <Button>
            Click to Upload
          </Button>
        </Upload>

        <label>
          物品:
          <input type="text" name="thingName" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        </label>
        <br/>
        <label>
          位置:
          <input type="text" name="thingPosition" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        </label>
        <input type="submit" value="提交" onClick={this.handleSubmit} />

        <hr />

        <ul>
          {
            this.props.thingList.map((item, index) =>
              <li>
                {item.thingName} --- {item.thingPosition}
                <div style={{ marginTop: 20, height: 170, width: 200, transform: this.state.transStyle, display: 'flex', alignItems: 'center' }}>
                  <img
                    alt="example"
                    style={{ width: '100%', height: '100%' }}
                    src={item.url}
                  />
                </div>
                <hr/>
                <br/>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );

  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log("the input value", value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    this.props.saveThing({ ...this.state });
    this.props.listThing();
  }

}

export default connect
  (
    (state) => ({
      thingList: state.index.thingList
    }),
    (dispatch) => ({
      saveThing(payload) {
        // dispatch(actionCreators.changeNameAction()); 不用 redux-thunk了
        dispatch({ type: 'index/saveThing', payload });
      },
      listThing(payload) {
        dispatch({ type: 'index/listThing' });
      }
    })
  )(Thing);

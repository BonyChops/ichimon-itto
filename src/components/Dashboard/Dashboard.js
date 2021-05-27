import { Button, Card, Row, Col, Container, Section, TextInput, Tab, Tabs, Textarea } from 'react-materialize';
import React from "react";
import yaml from "js-yaml";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "無題のクイズ",
            description: "",
            questions: [],
            json: "",
            jsonBuffer: "",
            isJsonValid: true,
            yamlBuffer: ""
        }
    }

    componentDidMount() {
        this.generateJson();
    }

    generateJson(object = {}) {
        const buffer = { ...this.state };
        delete buffer.json;
        delete buffer.isJsonValid;
        delete buffer.jsonBuffer;
        delete buffer.yamlBuffer;
        this.setState({ json: JSON.stringify(Object.assign(buffer, object), null, 2) });
        this.setState({ jsonBuffer: JSON.stringify(Object.assign(buffer, object), null, 2) });
    }

    handleChange = (event, target) => {
        this.setState({ [target]: event.target.value });
        this.generateJson({ [target]: event.target.value });
    }

    tryEditJson = (event) => {
        this.setState({ jsonBuffer: event.target.value });
        let json;
        try {
            json = JSON.parse(event.target.value);
        } catch (e) {
            this.setState({ isJsonValid: false });
        }
        this.setState({ isJsonValid: true });
        this.setState({ json });
        this.setState(json);
    }

    handleKeyDown = (e, title) => {
        if (e.key === 'Tab' && e.keyCode !== 229) {
            e.preventDefault();
            const textareaElement = e.target;
            const currentText = textareaElement.value;
            const start = textareaElement.selectionStart;
            const end = textareaElement.selectionEnd;
            const spaceCount = 4;
            const substitution = Array(spaceCount + 1).join(' ');
            const newText = currentText.substring(0, start) + substitution + currentText.substring(end, currentText.length);
            this.setState({
                [title]: newText,
            }, () => {
                textareaElement.setSelectionRange(start + spaceCount, start + spaceCount);
            });
        }
    }

    tryEditJson = (event) => {
        this.setState({ jsonBuffer: event.target.value });
        let json;
        try {
            json = JSON.parse(event.target.value);
        } catch (e) {
            this.setState({ isJsonValid: false });
        }
        this.setState({ isJsonValid: true });
        this.setState({ json });
        this.setState(json);
    }

    render() {
        return (
            <Section className="no-pad-bot" id="index-banner">
                <Container>
                    <br /><br />
                    <Row className="center">
                        <Col s={12}>
                            <TextInput s={12} m={6} label="Title" validate defaultValue='Alvin' value={this.state.title} onChange={(e) => this.handleChange(e, "title")} />
                        </Col>
                        <Col s={12}>
                            <TextInput s={12} m={6} label="Description" validate defaultValue='Alvin' value={this.state.description} onChange={(e) => this.handleChange(e, "description")} />
                        </Col>
                    </Row>

                    <br /><br />
                    <Tabs className='tab-demo z-depth-1 light-blue-text lighten-1' >
                        <Tab title="問題編集(yaml)">
                            <Textarea s={12} id="yaml-editor" value={this.state.yamlBuffer} onChange={(e) => this.handleChange(e, "yamlBuffer")} onKeyDown={(e) => this.handleKeyDown(e, "yamlBuffer")}>

                            </Textarea>
                        </Tab>
                        <Tab title="構成ファイル(JSON)" >
                            <Textarea s={12} value={this.state.jsonBuffer} label={this.state.isJsonValid ? "" : "JSON構文に問題があります"} validate={true} onChange={this.tryEditJson}>

                            </Textarea>
                        </Tab>
                        <Tab title="GUI編集(開発中)" disabled>Test 2</Tab>
                    </Tabs>
                </Container>
            </Section>
        )
    }
}

export default Dashboard;
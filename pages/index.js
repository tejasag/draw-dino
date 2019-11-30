import { Component } from 'react'
import AutosizeInput from 'react-input-autosize'

import Step from '../components/step'
import Meta from '../components/meta'

const styleColored = {
  fontWeight: "bold",
  fontSize: "1.1rem"
}

const styleInput = {
  borderRadius: "10px",
  fontSize: "1.5rem"
}

export default class extends Component {
  state = {
    dinoName: ''
  }

  changeDinoName = e => this.setState({ dinoName: e.target.value })

  getName = () => this.state.dinoName.replace(/\s/g, '-') || 'YOUR-DINO-NAME'

  render() {
    const easterEggs = [
      'https://youtu.be/kRpODt0rflA',
      'https://youtu.be/Cw_f4OgW0vQ',
      'https://youtu.be/SXDcpkbkItw',
      'https://youtu.be/51reoULiSjI'
    ]
    const eggLink = easterEggs[Math.floor(easterEggs.length * Math.random())]
    return (
      <>
        <Meta />
        <Step image="motivational-dino.png" imageLink={eggLink}>
          <h1>Pull Requests</h1>
          <p>
            <em>
            If you already know how to submit PRs, go <a target="_blank" href="https://github.com/hackclub/dinosaurs/issues/29">here</a>.
            </em>
          </p>
        </Step>
        <Step image="drawing-dino.gif" imageLink="drawing-dino.gif">
          <p>
            Draw your dino. Once you've got one, type the name of the dino here:
          </p>
          <AutosizeInput
            type="text"
            value={this.state.dinoName}
            onChange={this.changeDinoName}
            placeholder="drawing-dino"
            inputStyle={styleInput}
          />
        </Step>
        <Step image="star.gif" imageLink="star.mp4" subtitle="✨⭐️✨">
          <p>
            Now go to{" "}
            <a target="_blank" href="https://github.com/hackclub/dinosaurs">
              https://github.com/hackclub/dinosaurs
            </a>{" "}
            and click "star".
          </p>
        </Step>
        <Step
          image="new-branch.gif"
          imageLink="new-branch.mp4"
          subtitle="Create Branch: drawing-dino"
        >
          <p>Find and click the dropdown "Branch: master ▼".</p>
          <p>
            Type in <strong>{this.getName()}</strong>
          </p>
          <p>Click "Create branch: {this.getName()}"</p>
          <p>
            <em>
              If it doesn't include "Create branch", that name is already taken.
              Choose a new name
            </em>
          </p>
          <AutosizeInput
            type="text"
            value={this.state.dinoName}
            onChange={this.changeDinoName}
            placeholder="dancing-dino"
          />
        </Step>
        <Step
          image="upload.gif"
          imageLink="upload.mp4"
          subtitle="Upload your masterpiece"
        >
          <p>Click "Upload files" and add your dino image</p>
          <p>
            Below "Commit changes", type <span style={quoteStyle}>“Add {this.getName()}”</span>{" "}
            in the first text box
          </p>
          <p>
            Then click{" "}
            <span style={{ ...styleColored, color: "rgb(52, 208, 88)" }}>
              COMMIT CHANGES
            </span>
          </p>
        </Step>
        <Step
          image="start-editing-readme.gif"
          imageLink="start-editing-readme.mp4"
          subtitle="Find README.md"
        >
          <p>Scroll through the list of files & find "README.md"</p>
          <p>To edit the file, click it & click the ✎ icon.</p>
        </Step>
        <Step
          image="edit-readme.gif"
          imageLink="edit-readme.mp4"
          subtitle="Add your dino in the README.md"
        >
          <p>Scroll through the list of files & find "README.md"</p>
          <p>To edit the file, click it & click the ✎ icon.</p>
          <pre><code>
            "{this.getName()}"
            ![]({this.getName()})
          </code></pre>
          <p>
            Below "Commit changes", type{" "}
            <strong>Add {this.getName()} to README</strong> in the first text
            box
          </p>
          <p>
            Then click{" "}
            <span style={{ ...styleColored, color: "rgb(52, 208, 88)" }}>
              COMMIT CHANGES
            </span>
          </p>
        </Step>
        <Step image="create-pr.gif" imageLink="create-pr.mp4">
          <p>
            Go back to{' '}
            <a target="_blank" href="https://github.com/hackclub/dinosaurs">
              https://github.com/hackclub/dinosaurs
            </a>{' '}
            and click{' '}
            <span style={{ ...styleColored, color: "rgb(52, 208, 88)" }}>
              Compare & pull request
            </span>
            .
            </p>
            <p> Then click{' '}
            <span style={{ ...styleColored, color: "rgb(52, 208, 88)" }}>
              Create pull request
            </span>
          </p>
        </Step>
        <Step>
          <h1>Get the badge</h1>
          <p>
            Type in your Slack username, but <strong>be careful not to @tag</strong> if you have
            a different username between Slack and GitHub you might be
            notifying someone random.
          </p>
        </Step>
      </>
    )
  }
}

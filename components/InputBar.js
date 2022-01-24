import {html, render} from 'lit-html';
import {styleMap} from 'lit-html/directives/style-map.js';
import { CardListTemplate } from './CardList';

const inputBarTemplate = () => {
    let styles = {
        inputBar : {
            width: "100%",
			boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
			borderRadius: "5px",
			padding: "15px 20px",
			boxSizing: "border-box",
			marginBottom: "10px",
			backgroundColor: "rgb(240,240,240)",
			transitionDuration: "0.1s",
            display: "flex",
        },
        inputField:{
            flex: "0.8",
            height: "100%",
        },
        input:{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            fontSize: "20px",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            padding: "6px 10px",
        },
        addButton : {
            height: "inherit",
            display: "block",
            backgroundColor: "#f40d30",
            color: "white",
            border: "none",
            flex: "0.2",
            borderRadius: "5px",
            outline: "none",
            fontSize: "20px",
			boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
            cursor: "pointer",
        }
    };

    let text = "";

    /**
     * Handles Change in Input Field
     * @param {object} e - Event Object
     */
    let handleInputChange = (e) => {
        text = e.target.value;
    }

    /**
     * Handles Click on Add Task Button
     */
    let handleAddTask = () => {
        addTask(text);
        text = "";
        document.querySelector("input").value = "";
        render(CardListTemplate(tasks), document.querySelector("#cardContainer"));
    }

    return html`
        <div style=${styleMap(styles.inputBar)}>
            <div style=${styleMap(styles.inputField)}>
                <input @input=${e => handleInputChange(e)} .value=${text} style=${styleMap(styles.input)} type="text" placeholder="What to do?"/>
            </div>
            <button style=${styleMap(styles.addButton)}
                @click=${handleAddTask}>Add</button>
        </div>
    `;
}

render(inputBarTemplate(), document.querySelector("#inputBar"));
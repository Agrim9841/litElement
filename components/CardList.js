import {html, render} from 'lit-html';
import {styleMap} from 'lit-html/directives/style-map.js';

const CardTemplate = (taskItem) => {
    let styles = {
        card:{
			boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
			borderRadius: "5px",
			padding: "15px 20px",
			boxSizing: "borderBox",
			marginBottom: "10px",
			backgroundColor: "rgb(240,240,240)",
			transitionDuration: "0.1s",
			display: "flex",
			alignItems: "center",
		},
        cardTitle : {
			margin: "0px",
			textTransform: "capitalize",
			flexGrow: "1",
            textDecoration: taskItem.completed?"line-through": "none",
		},
        btnDelete : {
			height: "40px",
			width: "40px",
			fontSize: "20px",
			color: "white",
			backgroundColor: "#f40d30",
			outline: "none",
			border: "none",
			borderRadius: "5px",
			marginLeft: "10px"
		},
        btnTick : {
			height: "40px",
			width: "40px",
			fontSize: "20px",
			color: "white",
			backgroundColor: "green",
			outline: "none",
			border: "none",
			borderRadius: "5px",
			marginLeft: "10px"
		},
    }

    let handleDelete = () =>  {
        deleteTask(taskItem.id);
        render(CardListTemplate(tasks), document.querySelector("#cardContainer"));
    }

    let handleComplete = ()=>{
        completeTask(taskItem.id);
        render(CardListTemplate(tasks), document.querySelector("#cardContainer"));
    }

    return html`
        <div style=${styleMap(styles.card)}>
            <h2 style=${styleMap(styles.cardTitle)}>${taskItem.name}</h2>
            ${
                taskItem.completed? "": html`<button style=${styleMap(styles.btnTick)} @click=${handleComplete}>
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>`
            }
            <button style=${styleMap(styles.btnDelete)} @click=${handleDelete}>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    `;
}

export const CardListTemplate = (taskList) => {
    return html `
        ${
            taskList.map( task=> CardTemplate(task))
        }
    `;
}

render(CardListTemplate(tasks), document.querySelector("#cardContainer"));
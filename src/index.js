import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App1 from "./App1"
import registerServiceWorker from "./registerServiceWorker";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} />
			<Route path="/:token" component={App1} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();

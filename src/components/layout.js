import React from "react";
import "./layout.css";
import Menu from "./menu";
import Sidebar from "./sidebar";
export default ({ children }) => {
	return (
			<div className="app">
			<Menu />
			<div className="main">
				<div classname="content">{children}</div>
				<div className="sidebar"><Sidebar /></div>
			</div>
			</div>
		)
} 
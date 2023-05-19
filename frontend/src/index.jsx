import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('chat');
const root = createRoot(domNode);
root.render(<App/>)
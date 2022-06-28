import React from 'https://jspm.dev/react';
import ReactDOMServer from 'https://jspm.dev/react-dom/server';
import ReactDom from 'https://jspm.dev/react-dom';
import { Chart } from 'https://jspm.dev/chart.js';

import {
  ObsidianWrapper,
  useObsidian,
  BrowserCache,
// } from 'https://deno.land/x/obsidian/clientMod.ts'; FIX THIS
} from '../obsidian/clientMod.ts';

import rsh from 'https://jspm.dev/react-syntax-highlighter';

const realRSH: any = rsh;

const CodeBlock = realRSH.Prism;

export {
  BrowserCache,
  ObsidianWrapper,
  useObsidian,
  React,
  ReactDOMServer,
  ReactDom,
  CodeBlock,
  Chart,
};

import {
  EditorState,
  ContentBlock,
  genKey
} from 'draft-js';

import { List, Map } from 'immutable';

export const getSelectionRange = () => {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return null;
  return selection.getRangeAt(0);
};

export const getCurrentBlock = (editorState) => {
  const selectionState = editorState.getSelection();
  const contentState = editorState.getCurrentContent();

  return contentState.getBlockForKey(selectionState.getStartKey());
};

export const addNewBlockAt = (
  editorState,
  pivotBlockKey,
  newBlockType = 'unstyled',
  initialData = new Map({})
) => {
  const content = editorState.getCurrentContent();
  const blockMap = content.getBlockMap();
  const block = blockMap.get(pivotBlockKey);

  if (!block) {
    throw new Error(`The pivot key - ${ pivotBlockKey } is not present in blockMap.`);
  }

  const blocksBefore = blockMap.toSeq().takeUntil((v) => (v === block));
  const blocksAfter = blockMap.toSeq().skipUntil((v) => (v === block)).rest();
  const newBlockKey = genKey();

  const newBlock = new ContentBlock({
    key: newBlockKey,
    type: newBlockType,
    text: '',
    characterList: new List(),
    depth: 0,
    data: initialData,
  });

  const newBlockMap = blocksBefore.concat(
    [[pivotBlockKey, block], [newBlockKey, newBlock]],
    blocksAfter
  ).toOrderedMap();

  const selection = editorState.getSelection();

  const newContent = content.merge({
    blockMap: newBlockMap,
    selectionAfter: selection.merge({
      anchorKey: newBlockKey,
      anchorOffset: 0,
      focusKey: newBlockKey,
      focusOffset: 0,
      isBackward: false,
    }),
  });
  console.log("fadfsd22222",getCurrentBlock(editorState),newBlockKey)
  return EditorState.push(editorState, newContent, 'split-block');
};

export const closest = (element, matchFunction) => {
  let currentElement = element;

  while (currentElement) {
    if (matchFunction(currentElement)) return currentElement;
    currentElement = currentElement.parentNode;
  }
};

export const hasClass = (element, className) => {
  let isHasClass = false;

  if (element.classList) {
    isHasClass = element.classList.contains(className);
  } else {
    isHasClass = new RegExp(`(^| )${ className }( |$)`, 'gi').test(element.className);
  }

  return isHasClass;
};

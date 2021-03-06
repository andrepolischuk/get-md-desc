import { text, html, match, isParagraph } from 'commonmark-helpers';
import trimTag from 'trim-html-tag';

const isDesc = (node, exclude) =>
  isParagraph(node) && !text(node).match(exclude);

export default (input, exclude = null) => {
  let node = match(input, node => isDesc(node, exclude));
  if (!node) return;
  return {
    text: text(node),
    html: trimTag(html(node)),
    node
  };
};

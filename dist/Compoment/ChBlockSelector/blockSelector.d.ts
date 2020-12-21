/// <reference types="react" />
import './blockSelector.less';
declare type BlockItem = {
    id: never;
    name: String;
};
declare function BlockSelector({ list, value, onChange, multiple }: {
    list: BlockItem[];
    value: [];
    onChange: Function;
    multiple: Boolean;
}): JSX.Element;
export default BlockSelector;

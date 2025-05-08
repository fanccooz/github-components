declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: ArrayConstructor;
        required: true;
    };
    defaultContainerWidth: {
        type: NumberConstructor;
        default: null;
    };
}>, {}, {
    dragData: unknown[];
    defaultWidth: number;
    containerWidth: null;
    observer: null;
    dragIndex: null;
}, {}, {
    initDrag(): void;
    /**
     * 推拽的定位变化
     */
    dragMoveListener(event: any, isEnd: any): void;
    /**
     * 调整大小的变化
     */
    resizableListener(event: any, isEnd: any): void;
    /**
     * 监听容器宽度变化
     */
    observeContainer(): void;
    setDragData(index: any, rect: any): void;
    /**
     * 调整大小的后的一些重要的值的更改
     */
    setInteractEnd(event: any): void;
    /**
     * 清除css的transform的设置
     */
    clearTransform(target: any): void;
    /**
     * 设置监听容器宽度变化之后的网格宽度设置和默认容器宽度设置
     */
    adjustedDragData(defaultWidth: any): void;
    replaceLocation(dragIndex: any, dropIndex: any): void;
    adjustWidth(width: any): number;
    handleDebounce: any;
    saveData(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: ArrayConstructor;
        required: true;
    };
    defaultContainerWidth: {
        type: NumberConstructor;
        default: null;
    };
}>> & Readonly<{}>, {
    defaultContainerWidth: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

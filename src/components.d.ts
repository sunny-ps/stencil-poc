/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GlobalState {
    }
    interface SquaredClicks {
    }
    interface TodoList {
    }
}
declare global {
    interface HTMLGlobalStateElement extends Components.GlobalState, HTMLStencilElement {
    }
    var HTMLGlobalStateElement: {
        prototype: HTMLGlobalStateElement;
        new (): HTMLGlobalStateElement;
    };
    interface HTMLSquaredClicksElement extends Components.SquaredClicks, HTMLStencilElement {
    }
    var HTMLSquaredClicksElement: {
        prototype: HTMLSquaredClicksElement;
        new (): HTMLSquaredClicksElement;
    };
    interface HTMLTodoListElement extends Components.TodoList, HTMLStencilElement {
    }
    var HTMLTodoListElement: {
        prototype: HTMLTodoListElement;
        new (): HTMLTodoListElement;
    };
    interface HTMLElementTagNameMap {
        "global-state": HTMLGlobalStateElement;
        "squared-clicks": HTMLSquaredClicksElement;
        "todo-list": HTMLTodoListElement;
    }
}
declare namespace LocalJSX {
    interface GlobalState {
    }
    interface SquaredClicks {
    }
    interface TodoList {
    }
    interface IntrinsicElements {
        "global-state": GlobalState;
        "squared-clicks": SquaredClicks;
        "todo-list": TodoList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "global-state": LocalJSX.GlobalState & JSXBase.HTMLAttributes<HTMLGlobalStateElement>;
            "squared-clicks": LocalJSX.SquaredClicks & JSXBase.HTMLAttributes<HTMLSquaredClicksElement>;
            "todo-list": LocalJSX.TodoList & JSXBase.HTMLAttributes<HTMLTodoListElement>;
        }
    }
}

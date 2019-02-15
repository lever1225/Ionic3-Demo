import { Animation, PageTransition } from "ionic-angular";

/**********************自定义模态窗动画效果 start***********************************************/
//android 4.4下无法正常显示
//android 5.1下正常

/**重写modal展示动画(由中间向四周扩散) */
export class ModalScaleEnter extends PageTransition {
    public init() {
        super.init();
        const ele = this.enteringView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(0)', 'scale(1)');

        this.element(this.enteringView.pageRef())
            .duration(400)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    }
}
/**模态窗关闭动画效果 */
export class ModalScaleLeave extends PageTransition{
    public init() {
        super.init();
        const ele = this.leavingView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'scale(1)', 'scale(0)');

        this
            .element(this.leavingView.pageRef())
            .duration(100)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    }
}

/**重写模态窗展开动画样式(从右端滑出) */
export class ModalFromRightEnter extends PageTransition {
    public init() {
        super.init();
        const ele = this.enteringView.pageRef().nativeElement;
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(100%)', 'translateX(20%)');
        const contentWrapper = new Animation(this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'width': '80%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);

    }
}
/**模态窗退出动画 */
export class ModalFromRightLeave extends PageTransition {
    public init() {
        super.init();
        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visiblity': 'hidden' });
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(20%)', 'translateX(100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper);
    }
}
/**********************************************end*************************************************/
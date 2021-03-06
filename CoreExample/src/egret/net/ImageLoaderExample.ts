/**
 * 下面的示例使用 egret.ImageLoader 类加载图片。
 */
class ImageLoaderExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        var imageLoader:egret.ImageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE,this.loadCompleteHandler,this);
        imageLoader.load("resource/assets/lark.png");
    }

    private loadCompleteHandler(event:egret.Event):void {
        var imageLoader = <egret.ImageLoader>event.currentTarget;
        var bitmap:egret.Bitmap = new egret.Bitmap(imageLoader.data);
        this.addChild(bitmap);
    }

}
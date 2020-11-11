
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/slots/Reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91e54zzGJ5Os6qxY73m4+B5', 'Reel');
// scripts/slots/Reel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SlotEnum_1 = require("../SlotEnum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Reel = /** @class */ (function (_super) {
    __extends(Reel, _super);
    function Reel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reelAnchor = null;
        _this.spinDirection = SlotEnum_1.default.Direction.Down;
        _this.tiles = [];
        _this._tilePrefab = null;
        _this.winnersIndex = [];
        _this.result = [];
        _this.stopSpinning = false;
        return _this;
    }
    Object.defineProperty(Reel.prototype, "tilePrefab", {
        get: function () {
            return this._tilePrefab;
        },
        set: function (newPrefab) {
            this._tilePrefab = newPrefab;
            this.reelAnchor.removeAllChildren();
            this.tiles = [];
            if (newPrefab !== null) {
                this.createReel();
                this.shuffle();
            }
        },
        enumerable: false,
        configurable: true
    });
    Reel.prototype.createReel = function () {
        var newTile;
        if (this.reelAnchor.children.length > 0) {
            for (var i = 0; i < 5; i += 1) {
                this.tiles[i] = this.reelAnchor.children[i];
            }
        }
        else {
            for (var i = 0; i < 5; i += 1) {
                newTile = cc.instantiate(this.tilePrefab);
                this.reelAnchor.addChild(newTile);
                this.tiles[i] = newTile;
            }
        }
        this.shuffle();
    };
    Reel.prototype.shuffle = function () {
        console.log("shuffle");
        for (var i = 0; i < this.tiles.length; i += 1) {
            this.tiles[i].getComponent('Tile').setRandom();
        }
    };
    Reel.prototype.readyStop = function (newResult, winnerIndexes) {
        var check = this.spinDirection === SlotEnum_1.default.Direction.Down || newResult == null;
        this.result = check ? newResult : newResult.reverse();
        this.winnersIndex = winnerIndexes;
        this.stopSpinning = true;
    };
    Reel.prototype.changeCallback = function (element) {
        if (element === void 0) { element = null; }
        var el = element;
        var dirModifier = this.spinDirection === SlotEnum_1.default.Direction.Down ? -1 : 1;
        if (el.position.y * dirModifier > 288) {
            el.position = cc.v2(0, -288 * dirModifier);
            var pop = null;
            if (this.result != null && this.result.length > 0) {
                pop = this.result.pop();
            }
            if (pop != null && pop >= 0) {
                el.getComponent('Tile').setTile(pop);
                if (this.winnersIndex.indexOf(pop) >= 0) {
                    el.getComponent('Tile').setAnimation(true);
                }
            }
            else {
                el.getComponent('Tile').setRandom();
            }
        }
    };
    Reel.prototype.checkEndCallback = function (element) {
        if (element === void 0) { element = null; }
        var el = element;
        if (this.stopSpinning) {
            this.getComponent(cc.AudioSource).play();
            this.doStop(el);
        }
        else {
            this.doSpinning(el);
        }
    };
    Reel.prototype.doSpin = function (windUp) {
        var _this = this;
        this.stopSpinning = false;
        this.reelAnchor.children.forEach(function (element) {
            var dirModifier = _this.spinDirection === SlotEnum_1.default.Direction.Down ? -1 : 1;
            var delay = cc.tween(element).delay(windUp);
            var start = cc.tween(element).by(0.25, { position: cc.v2(0, 144 * dirModifier) }, { easing: 'backIn' });
            var doChange = cc.tween().call(function () { return _this.changeCallback(element); });
            var callSpinning = cc.tween(element).call(function () { return _this.doSpinning(element, 5); });
            delay
                .then(start)
                .then(doChange)
                .then(callSpinning)
                .start();
        });
    };
    Reel.prototype.doSpinning = function (element, times) {
        var _this = this;
        if (element === void 0) { element = null; }
        if (times === void 0) { times = 1; }
        var dirModifier = this.spinDirection === SlotEnum_1.default.Direction.Down ? -1 : 1;
        var move = cc.tween().by(0.04, { position: cc.v2(0, 144 * dirModifier) });
        var doChange = cc.tween().call(function () { return _this.changeCallback(element); });
        var repeat = cc.tween(element).repeat(times, move.then(doChange));
        var checkEnd = cc.tween().call(function () { return _this.checkEndCallback(element); });
        repeat.then(checkEnd).start();
    };
    Reel.prototype.doStop = function (element) {
        var _this = this;
        if (element === void 0) { element = null; }
        var dirModifier = this.spinDirection === SlotEnum_1.default.Direction.Down ? -1 : 1;
        var move = cc.tween(element).by(0.04, { position: cc.v2(0, 144 * dirModifier) });
        var doChange = cc.tween().call(function () { return _this.changeCallback(element); });
        var end = cc.tween().by(0.2, { position: cc.v2(0, 144 * dirModifier) }, { easing: 'bounceOut' });
        move
            .then(doChange)
            .then(move)
            .then(doChange)
            .then(end)
            .then(doChange)
            .start();
    };
    Reel.prototype.setAnimation = function (value) {
        for (var i = 0; i < this.tiles.length; i += 1) {
            this.tiles[i].getComponent('Tile').setAnimation(value);
        }
    };
    __decorate([
        property({ type: cc.Node })
    ], Reel.prototype, "reelAnchor", void 0);
    __decorate([
        property({ type: cc.Enum(SlotEnum_1.default.Direction) })
    ], Reel.prototype, "spinDirection", void 0);
    __decorate([
        property({ type: [cc.Node], visible: false })
    ], Reel.prototype, "tiles", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Reel.prototype, "_tilePrefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Reel.prototype, "tilePrefab", null);
    Reel = __decorate([
        ccclass
    ], Reel);
    return Reel;
}(cc.Component));
exports.default = Reel;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2xvdHNcXFJlZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBeUpDO1FBdkpRLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBR2xCLG1CQUFhLEdBQUcsa0JBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBR2xDLFdBQUssR0FBRyxFQUFFLENBQUM7UUFHWixpQkFBVyxHQUFHLElBQUksQ0FBQztRQU9sQixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQWFsQixZQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUU1QixrQkFBWSxHQUFHLEtBQUssQ0FBQzs7SUF3SDlCLENBQUM7SUEzSUMsc0JBQUksNEJBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO2FBSUQsVUFBZSxTQUFvQjtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFaEIsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQjtRQUNILENBQUM7OztPQWJBO0lBbUJELHlCQUFVLEdBQVY7UUFDRSxJQUFJLE9BQWdCLENBQUM7UUFDckIsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN0QztZQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxF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b3J0IEF1eCBmcm9tICcuLi9TbG90RW51bSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSB9KVxuICBwdWJsaWMgcmVlbEFuY2hvciA9IG51bGw7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShBdXguRGlyZWN0aW9uKSB9KVxuICBwdWJsaWMgc3BpbkRpcmVjdGlvbiA9IEF1eC5EaXJlY3Rpb24uRG93bjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuTm9kZV0sIHZpc2libGU6IGZhbHNlIH0pXG4gIHByaXZhdGUgdGlsZXMgPSBbXTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcbiAgcHVibGljIF90aWxlUHJlZmFiID0gbnVsbDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcbiAgZ2V0IHRpbGVQcmVmYWIoKTogY2MuUHJlZmFiIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZVByZWZhYjtcbiAgfVxuXG4gIHByaXZhdGUgd2lubmVyc0luZGV4ID0gW107XG5cbiAgc2V0IHRpbGVQcmVmYWIobmV3UHJlZmFiOiBjYy5QcmVmYWIpIHtcbiAgICB0aGlzLl90aWxlUHJlZmFiID0gbmV3UHJlZmFiO1xuICAgIHRoaXMucmVlbEFuY2hvci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIHRoaXMudGlsZXMgPSBbXTtcblxuICAgIGlmIChuZXdQcmVmYWIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY3JlYXRlUmVlbCgpO1xuICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXN1bHQ6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuICBwdWJsaWMgc3RvcFNwaW5uaW5nID0gZmFsc2U7XG5cbiAgY3JlYXRlUmVlbCgpOiB2b2lkIHtcbiAgICBsZXQgbmV3VGlsZTogY2MuTm9kZTtcbiAgICBpZih0aGlzLnJlZWxBbmNob3IuY2hpbGRyZW4ubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLnRpbGVzW2ldID0gdGhpcy5yZWVsQW5jaG9yLmNoaWxkcmVuW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgICAgbmV3VGlsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlsZVByZWZhYik7XG4gICAgICAgIHRoaXMucmVlbEFuY2hvci5hZGRDaGlsZChuZXdUaWxlKTtcbiAgICAgICAgdGhpcy50aWxlc1tpXSA9IG5ld1RpbGU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2h1ZmZsZSgpO1xuXG4gIH1cblxuICBzaHVmZmxlKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwic2h1ZmZsZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGlsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMudGlsZXNbaV0uZ2V0Q29tcG9uZW50KCdUaWxlJykuc2V0UmFuZG9tKCk7XG4gICAgfVxuICB9XG5cbiAgcmVhZHlTdG9wKG5ld1Jlc3VsdDogQXJyYXk8bnVtYmVyPiwgd2lubmVySW5kZXhlczogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrID0gdGhpcy5zcGluRGlyZWN0aW9uID09PSBBdXguRGlyZWN0aW9uLkRvd24gfHwgbmV3UmVzdWx0ID09IG51bGw7XG4gICAgdGhpcy5yZXN1bHQgPSBjaGVjayA/IG5ld1Jlc3VsdCA6IG5ld1Jlc3VsdC5yZXZlcnNlKCk7XG4gICAgdGhpcy53aW5uZXJzSW5kZXggPSB3aW5uZXJJbmRleGVzO1xuICAgIHRoaXMuc3RvcFNwaW5uaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGNoYW5nZUNhbGxiYWNrKGVsZW1lbnQ6IGNjLk5vZGUgPSBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50O1xuICAgIGNvbnN0IGRpck1vZGlmaWVyID0gdGhpcy5zcGluRGlyZWN0aW9uID09PSBBdXguRGlyZWN0aW9uLkRvd24gPyAtMSA6IDE7XG4gICAgaWYgKGVsLnBvc2l0aW9uLnkgKiBkaXJNb2RpZmllciA+IDI4OCkge1xuICAgICAgZWwucG9zaXRpb24gPSBjYy52MigwLCAtMjg4ICogZGlyTW9kaWZpZXIpO1xuXG4gICAgICBsZXQgcG9wID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnJlc3VsdCAhPSBudWxsICYmIHRoaXMucmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9wID0gdGhpcy5yZXN1bHQucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3AgIT0gbnVsbCAmJiBwb3AgPj0gMCkge1xuICAgICAgICBlbC5nZXRDb21wb25lbnQoJ1RpbGUnKS5zZXRUaWxlKHBvcCk7XG4gICAgICAgIGlmKHRoaXMud2lubmVyc0luZGV4LmluZGV4T2YocG9wKSA+PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgZWwuZ2V0Q29tcG9uZW50KCdUaWxlJykuc2V0QW5pbWF0aW9uKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5nZXRDb21wb25lbnQoJ1RpbGUnKS5zZXRSYW5kb20oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0VuZENhbGxiYWNrKGVsZW1lbnQ6IGNjLk5vZGUgPSBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50O1xuICAgIGlmICh0aGlzLnN0b3BTcGlubmluZykge1xuICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgIHRoaXMuZG9TdG9wKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1NwaW5uaW5nKGVsKTtcbiAgICB9XG4gIH1cblxuICBkb1NwaW4od2luZFVwOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BTcGlubmluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5yZWVsQW5jaG9yLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBkaXJNb2RpZmllciA9IHRoaXMuc3BpbkRpcmVjdGlvbiA9PT0gQXV4LkRpcmVjdGlvbi5Eb3duID8gLTEgOiAxO1xuXG4gICAgICBjb25zdCBkZWxheSA9IGNjLnR3ZWVuKGVsZW1lbnQpLmRlbGF5KHdpbmRVcCk7XG4gICAgICBjb25zdCBzdGFydCA9IGNjLnR3ZWVuKGVsZW1lbnQpLmJ5KDAuMjUsIHsgcG9zaXRpb246IGNjLnYyKDAsIDE0NCAqIGRpck1vZGlmaWVyKSB9LCB7IGVhc2luZzogJ2JhY2tJbicgfSk7XG4gICAgICBjb25zdCBkb0NoYW5nZSA9IGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB0aGlzLmNoYW5nZUNhbGxiYWNrKGVsZW1lbnQpKTtcbiAgICAgIGNvbnN0IGNhbGxTcGlubmluZyA9IGNjLnR3ZWVuKGVsZW1lbnQpLmNhbGwoKCkgPT4gdGhpcy5kb1NwaW5uaW5nKGVsZW1lbnQsIDUpKTtcblxuICAgICAgZGVsYXlcbiAgICAgICAgLnRoZW4oc3RhcnQpXG4gICAgICAgIC50aGVuKGRvQ2hhbmdlKVxuICAgICAgICAudGhlbihjYWxsU3Bpbm5pbmcpXG4gICAgICAgIC5zdGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZG9TcGlubmluZyhlbGVtZW50OiBjYy5Ob2RlID0gbnVsbCwgdGltZXMgPSAxKTogdm9pZCB7XG4gICAgY29uc3QgZGlyTW9kaWZpZXIgPSB0aGlzLnNwaW5EaXJlY3Rpb24gPT09IEF1eC5EaXJlY3Rpb24uRG93biA/IC0xIDogMTtcblxuICAgIGNvbnN0IG1vdmUgPSBjYy50d2VlbigpLmJ5KDAuMDQsIHsgcG9zaXRpb246IGNjLnYyKDAsIDE0NCAqIGRpck1vZGlmaWVyKSB9KTtcbiAgICBjb25zdCBkb0NoYW5nZSA9IGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB0aGlzLmNoYW5nZUNhbGxiYWNrKGVsZW1lbnQpKTtcbiAgICBjb25zdCByZXBlYXQgPSBjYy50d2VlbihlbGVtZW50KS5yZXBlYXQodGltZXMsIG1vdmUudGhlbihkb0NoYW5nZSkpO1xuICAgIGNvbnN0IGNoZWNrRW5kID0gY2MudHdlZW4oKS5jYWxsKCgpID0+IHRoaXMuY2hlY2tFbmRDYWxsYmFjayhlbGVtZW50KSk7XG5cbiAgICByZXBlYXQudGhlbihjaGVja0VuZCkuc3RhcnQoKTtcbiAgfVxuXG4gIGRvU3RvcChlbGVtZW50OiBjYy5Ob2RlID0gbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IGRpck1vZGlmaWVyID0gdGhpcy5zcGluRGlyZWN0aW9uID09PSBBdXguRGlyZWN0aW9uLkRvd24gPyAtMSA6IDE7XG5cbiAgICBjb25zdCBtb3ZlID0gY2MudHdlZW4oZWxlbWVudCkuYnkoMC4wNCwgeyBwb3NpdGlvbjogY2MudjIoMCwgMTQ0ICogZGlyTW9kaWZpZXIpIH0pO1xuICAgIGNvbnN0IGRvQ2hhbmdlID0gY2MudHdlZW4oKS5jYWxsKCgpID0+IHRoaXMuY2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpO1xuICAgIGNvbnN0IGVuZCA9IGNjLnR3ZWVuKCkuYnkoMC4yLCB7IHBvc2l0aW9uOiBjYy52MigwLCAxNDQgKiBkaXJNb2RpZmllcikgfSwgeyBlYXNpbmc6ICdib3VuY2VPdXQnIH0pO1xuXG4gICAgbW92ZVxuICAgICAgLnRoZW4oZG9DaGFuZ2UpXG4gICAgICAudGhlbihtb3ZlKVxuICAgICAgLnRoZW4oZG9DaGFuZ2UpXG4gICAgICAudGhlbihlbmQpXG4gICAgICAudGhlbihkb0NoYW5nZSlcbiAgICAgIC5zdGFydCgpO1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uKHZhbHVlKTogdm9pZHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGlsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMudGlsZXNbaV0uZ2V0Q29tcG9uZW50KCdUaWxlJykuc2V0QW5pbWF0aW9uKHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiAiXX0=
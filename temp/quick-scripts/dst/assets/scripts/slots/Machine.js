
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/slots/Machine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e75a3lPjzhNLb8z3HrM6PP0', 'Machine');
// scripts/slots/Machine.ts

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
var Machine = /** @class */ (function (_super) {
    __extends(Machine, _super);
    function Machine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.button = null;
        _this._reelPrefab = null;
        _this._numberOfReels = 3;
        _this.reels = [];
        _this.spinning = false;
        return _this;
    }
    Object.defineProperty(Machine.prototype, "reelPrefab", {
        get: function () {
            return this._reelPrefab;
        },
        set: function (newPrefab) {
            this._reelPrefab = newPrefab;
            this.node.removeAllChildren();
            if (newPrefab !== null) {
                this.createMachine();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Machine.prototype, "numberOfReels", {
        get: function () {
            return this._numberOfReels;
        },
        set: function (newNumber) {
            this._numberOfReels = newNumber;
            if (this.reelPrefab !== null) {
                this.createMachine();
            }
        },
        enumerable: false,
        configurable: true
    });
    Machine.prototype.createMachine = function () {
        this.node.destroyAllChildren();
        this.reels = [];
        var newReel;
        for (var i = 0; i < this.numberOfReels; i += 1) {
            newReel = cc.instantiate(this.reelPrefab);
            this.node.addChild(newReel);
            this.reels[i] = newReel;
            var reelScript = newReel.getComponent('Reel');
            reelScript.createReel();
            reelScript.reelAnchor.getComponent(cc.Layout).enabled = false;
        }
        this.node.getComponent(cc.Widget).updateAlignment();
    };
    Machine.prototype.spin = function () {
        this.spinning = true;
        this.button.getChildByName('Label').getComponent(cc.Label).string = 'STOP';
        for (var i = 0; i < this.numberOfReels; i += 1) {
            var theReel = this.reels[i].getComponent('Reel');
            theReel.setAnimation(false);
            if (i % 2) {
                theReel.spinDirection = SlotEnum_1.default.Direction.Down;
            }
            else {
                theReel.spinDirection = SlotEnum_1.default.Direction.Up;
            }
            //theReel.toggleAnimation(new Array<number>(-1));
            theReel.doSpin(0.03 * i);
        }
    };
    Machine.prototype.lock = function () {
        this.button.getComponent(cc.Button).interactable = false;
    };
    Machine.prototype.stop = function (result, winnerIndexes) {
        var _this = this;
        if (result === void 0) { result = null; }
        setTimeout(function () {
            _this.spinning = false;
            _this.button.getComponent(cc.Button).interactable = true;
            _this.button.getChildByName('Label').getComponent(cc.Label).string = 'SPIN';
        }, 2500);
        var rngMod = Math.random() / 2;
        var _loop_1 = function (i) {
            var spinDelay = i < 2 + rngMod ? i / 4 : rngMod * (i - 2) + i / 4;
            var theReel = this_1.reels[i].getComponent('Reel');
            setTimeout(function () {
                theReel.readyStop(result[i], winnerIndexes);
            }, spinDelay * 1000);
        };
        var this_1 = this;
        for (var i = 0; i < this.numberOfReels; i += 1) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Node)
    ], Machine.prototype, "button", void 0);
    __decorate([
        property(cc.Prefab)
    ], Machine.prototype, "_reelPrefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Machine.prototype, "reelPrefab", null);
    __decorate([
        property({ type: cc.Integer })
    ], Machine.prototype, "_numberOfReels", void 0);
    __decorate([
        property({ type: cc.Integer, range: [3, 6], slide: true })
    ], Machine.prototype, "numberOfReels", null);
    Machine = __decorate([
        ccclass
    ], Machine);
    return Machine;
}(cc.Component));
exports.default = Machine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2xvdHNcXE1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ0dDO1FBOUZRLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFpQm5CLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBZWxCLFdBQUssR0FBRyxFQUFFLENBQUM7UUFFWixjQUFRLEdBQUcsS0FBSyxDQUFDOztJQXlEMUIsQ0FBQztJQXhGQyxzQkFBSSwrQkFBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFlLFNBQW9CO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUU5QixJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtRQUNILENBQUM7OztPQVRBO0lBZUQsc0JBQUksa0NBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWtCLFNBQWlCO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBRWhDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtRQUNILENBQUM7OztPQVJBO0lBY0QsK0JBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLE9BQWdCLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7WUFFeEIsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDeEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDL0Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELHNCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFM0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVCxPQUFPLENBQUMsYUFBYSxHQUFHLGtCQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxPQUFPLENBQUMsYUFBYSxHQUFHLGtCQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzthQUMxQztZQUNELGlEQUFpRDtZQUNqRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxzQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBSyxNQUFtQyxFQUFFLGFBQWE7UUFBdkQsaUJBZUM7UUFmSSx1QkFBQSxFQUFBLGFBQW1DO1FBQ3RDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3hELEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3RSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dDQUN4QixDQUFDO1lBQ1IsSUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BFLElBQU0sT0FBTyxHQUFHLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxVQUFVLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQzs7O1FBTHZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUFyQyxDQUFDO1NBTVQ7SUFDSCxDQUFDO0lBN0ZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7NkNBRzdCO0lBWUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO21EQUNMO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztnREFHMUQ7SUEzQmtCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FnRzNCO0lBQUQsY0FBQztDQWhHRCxBQWdHQyxDQWhHb0MsRUFBRSxDQUFDLFNBQVMsR0FnR2hEO2tCQWhHb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXggZnJvbSAnLi4vU2xvdEVudW0nO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFjaGluZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwdWJsaWMgYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBwdWJsaWMgX3JlZWxQcmVmYWIgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiB9KVxuICBnZXQgcmVlbFByZWZhYigpOiBjYy5QcmVmYWIge1xuICAgIHJldHVybiB0aGlzLl9yZWVsUHJlZmFiO1xuICB9XG5cbiAgc2V0IHJlZWxQcmVmYWIobmV3UHJlZmFiOiBjYy5QcmVmYWIpIHtcbiAgICB0aGlzLl9yZWVsUHJlZmFiID0gbmV3UHJlZmFiO1xuICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgaWYgKG5ld1ByZWZhYiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jcmVhdGVNYWNoaW5lKCk7XG4gICAgfVxuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxuICBwdWJsaWMgX251bWJlck9mUmVlbHMgPSAzO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHJhbmdlOiBbMywgNl0sIHNsaWRlOiB0cnVlIH0pXG4gIGdldCBudW1iZXJPZlJlZWxzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mUmVlbHM7XG4gIH1cblxuICBzZXQgbnVtYmVyT2ZSZWVscyhuZXdOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuX251bWJlck9mUmVlbHMgPSBuZXdOdW1iZXI7XG5cbiAgICBpZiAodGhpcy5yZWVsUHJlZmFiICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNyZWF0ZU1hY2hpbmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZWxzID0gW107XG5cbiAgcHVibGljIHNwaW5uaW5nID0gZmFsc2U7XG5cbiAgY3JlYXRlTWFjaGluZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgdGhpcy5yZWVscyA9IFtdO1xuXG4gICAgbGV0IG5ld1JlZWw6IGNjLk5vZGU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mUmVlbHM7IGkgKz0gMSkge1xuICAgICAgbmV3UmVlbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVlbFByZWZhYik7XG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3UmVlbCk7XG4gICAgICB0aGlzLnJlZWxzW2ldID0gbmV3UmVlbDtcblxuICAgICAgY29uc3QgcmVlbFNjcmlwdCA9IG5ld1JlZWwuZ2V0Q29tcG9uZW50KCdSZWVsJyk7XG4gICAgICByZWVsU2NyaXB0LmNyZWF0ZVJlZWwoKTtcbiAgICAgIHJlZWxTY3JpcHQucmVlbEFuY2hvci5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICB9XG5cbiAgc3BpbigpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmJ1dHRvbi5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICdTVE9QJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlJlZWxzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRoZVJlZWwgPSB0aGlzLnJlZWxzW2ldLmdldENvbXBvbmVudCgnUmVlbCcpO1xuICAgICAgdGhlUmVlbC5zZXRBbmltYXRpb24oZmFsc2UpO1xuICAgICAgaWYgKGkgJSAyKSB7XG4gICAgICAgIHRoZVJlZWwuc3BpbkRpcmVjdGlvbiA9IEF1eC5EaXJlY3Rpb24uRG93bjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZVJlZWwuc3BpbkRpcmVjdGlvbiA9IEF1eC5EaXJlY3Rpb24uVXA7XG4gICAgICB9XG4gICAgICAvL3RoZVJlZWwudG9nZ2xlQW5pbWF0aW9uKG5ldyBBcnJheTxudW1iZXI+KC0xKSk7XG4gICAgICB0aGVSZWVsLmRvU3BpbigwLjAzICogaSk7XG4gICAgfVxuICB9XG5cbiAgbG9jaygpOiB2b2lkIHtcbiAgICB0aGlzLmJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgfVxuXG4gIHN0b3AocmVzdWx0OiBBcnJheTxBcnJheTxudW1iZXI+PiA9IG51bGwsIHdpbm5lckluZGV4ZXMpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3Bpbm5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmJ1dHRvbi5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICdTUElOJztcbiAgICB9LCAyNTAwKTtcblxuICAgIGNvbnN0IHJuZ01vZCA9IE1hdGgucmFuZG9tKCkgLyAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlJlZWxzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNwaW5EZWxheSA9IGkgPCAyICsgcm5nTW9kID8gaSAvIDQgOiBybmdNb2QgKiAoaSAtIDIpICsgaSAvIDQ7XG4gICAgICBjb25zdCB0aGVSZWVsID0gdGhpcy5yZWVsc1tpXS5nZXRDb21wb25lbnQoJ1JlZWwnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGVSZWVsLnJlYWR5U3RvcChyZXN1bHRbaV0sIHdpbm5lckluZGV4ZXMpO1xuICAgICAgfSwgc3BpbkRlbGF5ICogMTAwMCk7XG4gICAgfVxuICB9XG59XG4iXX0=
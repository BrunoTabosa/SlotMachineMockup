
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7462271VdFN4J38ivhu1fP1', 'GameManager');
// scripts/GameManager.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.machine = null;
        _this.audioClick = null;
        _this.block = false;
        _this.result = null;
        _this.tileTextures = 29;
        return _this;
    }
    GameManager.prototype.start = function () {
        this.machine.getComponent('Machine').createMachine();
    };
    GameManager.prototype.update = function () {
        if (this.block && this.result != null) {
            this.informStop();
            this.result = null;
        }
    };
    GameManager.prototype.click = function () {
        cc.audioEngine.playEffect(this.audioClick, false);
        if (this.machine.getComponent('Machine').spinning === false) {
            this.block = false;
            this.machine.getComponent('Machine').spin();
            this.requestResult();
        }
        else if (!this.block) {
            this.block = true;
            this.machine.getComponent('Machine').lock();
        }
    };
    GameManager.prototype.requestResult = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.result = null;
                        _a = this;
                        return [4 /*yield*/, this.getAnswer()];
                    case 1:
                        _a.result = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameManager.prototype.getAnswer = function () {
        var randomResult = Math.random();
        var slotResult = [];
        if (randomResult <= 0.5) {
            console.log("Random return");
            this.winnersIndex = [-1];
        }
        else if (randomResult <= 0.83) {
            console.log("Single Line");
            this.winnersIndex = this.getUniqueRandomNumbersBetween(0, this.tileTextures, 1);
            slotResult = this.generateMachineResult(-1, this.winnersIndex[0], -1);
        }
        else if (randomResult <= 0.93) {
            //Two lines  
            console.log("Two lines");
            this.winnersIndex = this.getUniqueRandomNumbersBetween(0, this.tileTextures, 2);
            slotResult = this.generateMachineResult(this.winnersIndex[0], this.winnersIndex[1], -1);
        }
        else if (randomResult <= 1) {
            console.log("three lines");
            this.winnersIndex = this.getUniqueRandomNumbersBetween(0, this.tileTextures, 3);
            slotResult = this.generateMachineResult(this.winnersIndex[0], this.winnersIndex[1], this.winnersIndex[2]);
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(slotResult);
            }, 1000 + 500 * Math.random());
        });
    };
    GameManager.prototype.informStop = function () {
        var resultRelayed = this.result;
        this.machine.getComponent('Machine').stop(resultRelayed, this.winnersIndex);
    };
    GameManager.prototype.generateMachineResult = function (first, second, third) {
        var ret = Array();
        for (var index = 0; index < 6; index++) {
            ret.push(this.generateReelResult(first, second, third));
        }
        return ret;
    };
    GameManager.prototype.generateReelResult = function (first, second, third) {
        var excluding = Array();
        var ret = Array(first, second, third);
        excluding.push(first);
        excluding.push(second);
        excluding.push(third);
        var curNum;
        if (first < 0) {
            curNum = this.getRandomNumberExcluding(0, this.tileTextures, excluding);
            ret[0] = curNum;
            excluding.push(curNum);
        }
        if (second < 0) {
            curNum = this.getRandomNumberExcluding(0, this.tileTextures, excluding);
            ret[1] = curNum;
            excluding.push(curNum);
        }
        if (third < 0) {
            curNum = this.getRandomNumberExcluding(0, this.tileTextures, excluding);
            ret[2] = curNum;
            excluding.push(curNum);
        }
        return ret;
    };
    GameManager.prototype.getRandomNumberBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    GameManager.prototype.getUniqueRandomNumbersBetween = function (min, max, amount) {
        var ret = Array();
        for (var index = 0; index < amount; index++) {
            var added = false;
            while (!added) {
                var curNum = this.getRandomNumberBetween(min, max);
                if (ret.indexOf(curNum) < 0) {
                    ret.push(curNum);
                    added = true;
                }
            }
        }
        return ret;
    };
    GameManager.prototype.getRandomNumberExcluding = function (min, max, excluding) {
        var found = false;
        while (!found) {
            var curNum = this.getRandomNumberBetween(min, max);
            if (excluding.indexOf(curNum) <= -1) {
                found = true;
                return curNum;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "machine", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "audioClick", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFrS0M7UUFoS0MsYUFBTyxHQUFHLElBQUksQ0FBQztRQUdmLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7SUF1SjVCLENBQUM7SUFySkMsMkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMs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S0FBSyxHQUFHLElBQUksQ0FBQztpQkFDZDthQUNGO1NBRUY7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCw4Q0FBd0IsR0FBeEIsVUFBeUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTO1FBRTFDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixPQUFNLENBQUMsS0FBSyxFQUNaO1lBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2hDO2dCQUNFLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2IsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNKO0lBQ0gsQ0FBQztJQS9KRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNIO0lBR2Y7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO21EQUNmO0lBTEMsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtLL0I7SUFBRCxrQkFBQztDQWxLRCxBQWtLQyxDQWxLd0MsRUFBRSxDQUFDLFNBQVMsR0FrS3BEO2tCQWxLb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBtYWNoaW5lID0gbnVsbDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgYXVkaW9DbGljayA9IG51bGw7XG5cbiAgcHJpdmF0ZSBibG9jayA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcmVzdWx0ID0gbnVsbDtcbiAgcHJpdmF0ZSB3aW5uZXJzSW5kZXg7XG4gIHByaXZhdGUgdGlsZVRleHR1cmVzID0gMjk7XG5cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5tYWNoaW5lLmdldENvbXBvbmVudCgnTWFjaGluZScpLmNyZWF0ZU1hY2hpbmUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ibG9jayAmJiB0aGlzLnJlc3VsdCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmluZm9ybVN0b3AoKTtcbiAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjbGljaygpOiB2b2lkIHtcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGljaywgZmFsc2UpO1xuXG4gICAgaWYgKHRoaXMubWFjaGluZS5nZXRDb21wb25lbnQoJ01hY2hpbmUnKS5zcGlubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuYmxvY2sgPSBmYWxzZTtcbiAgICAgIHRoaXMubWFjaGluZS5nZXRDb21wb25lbnQoJ01hY2hpbmUnKS5zcGluKCk7XG4gICAgICB0aGlzLnJlcXVlc3RSZXN1bHQoKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmJsb2NrKSB7XG4gICAgICB0aGlzLmJsb2NrID0gdHJ1ZTtcbiAgICAgIHRoaXMubWFjaGluZS5nZXRDb21wb25lbnQoJ01hY2hpbmUnKS5sb2NrKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVxdWVzdFJlc3VsdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgdGhpcy5yZXN1bHQgPSBhd2FpdCB0aGlzLmdldEFuc3dlcigpO1xuICB9XG5cbiAgZ2V0QW5zd2VyKCk6IFByb21pc2U8QXJyYXk8QXJyYXk8bnVtYmVyPj4+IHtcbiAgICBjb25zdCByYW5kb21SZXN1bHQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBzbG90UmVzdWx0ID0gW107XG4gICAgXG4gICAgaWYocmFuZG9tUmVzdWx0IDw9IDAuNSlcbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJhbmRvbSByZXR1cm5cIik7XG4gICAgICB0aGlzLndpbm5lcnNJbmRleCA9IFstMV07XG4gICAgfVxuICAgIGVsc2UgaWYocmFuZG9tUmVzdWx0IDw9IDAuODMpXG4gICAge1xuICAgICAgY29uc29sZS5sb2coXCJTaW5nbGUgTGluZVwiKTtcbiAgICAgIHRoaXMud2lubmVyc0luZGV4ID0gdGhpcy5nZXRVbmlxdWVSYW5kb21OdW1iZXJzQmV0d2VlbigwLCB0aGlzLnRpbGVUZXh0dXJlcywgMSk7XG4gICAgICBzbG90UmVzdWx0ID0gdGhpcy5nZW5lcmF0ZU1hY2hpbmVSZXN1bHQoLTEsIHRoaXMud2lubmVyc0luZGV4WzBdLCAtMSk7XG4gICAgfVxuICAgIGVsc2UgaWYocmFuZG9tUmVzdWx0IDw9IDAuOTMpXG4gICAge1xuICAgICAgLy9Ud28gbGluZXMgIFxuICAgICAgY29uc29sZS5sb2coXCJUd28gbGluZXNcIik7XG4gICAgICB0aGlzLndpbm5lcnNJbmRleCA9IHRoaXMuZ2V0VW5pcXVlUmFuZG9tTnVtYmVyc0JldHdlZW4oMCwgdGhpcy50aWxlVGV4dHVyZXMsIDIpO1xuICAgICAgc2xvdFJlc3VsdCA9IHRoaXMuZ2VuZXJhdGVNYWNoaW5lUmVzdWx0KHRoaXMud2lubmVyc0luZGV4WzBdLCB0aGlzLndpbm5lcnNJbmRleFsxXSwgLTEpO1xuICAgIH1cbiAgICBlbHNlIGlmKHJhbmRvbVJlc3VsdCA8PSAxKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhyZWUgbGluZXNcIik7XG4gICAgICB0aGlzLndpbm5lcnNJbmRleCA9IHRoaXMuZ2V0VW5pcXVlUmFuZG9tTnVtYmVyc0JldHdlZW4oMCwgdGhpcy50aWxlVGV4dHVyZXMsIDMpO1xuICAgICAgc2xvdFJlc3VsdCA9IHRoaXMuZ2VuZXJhdGVNYWNoaW5lUmVzdWx0KHRoaXMud2lubmVyc0luZGV4WzBdLCB0aGlzLndpbm5lcnNJbmRleFsxXSwgdGhpcy53aW5uZXJzSW5kZXhbMl0pO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8QXJyYXk8bnVtYmVyPj4+KHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoc2xvdFJlc3VsdCk7XG4gICAgICB9LCAxMDAwICsgNTAwICogTWF0aC5yYW5kb20oKSk7XG4gICAgfSk7XG4gIH1cblxuICBpbmZvcm1TdG9wKCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdFJlbGF5ZWQgPSB0aGlzLnJlc3VsdDtcbiAgICB0aGlzLm1hY2hpbmUuZ2V0Q29tcG9uZW50KCdNYWNoaW5lJykuc3RvcChyZXN1bHRSZWxheWVkLCB0aGlzLndpbm5lcnNJbmRleCk7XG4gIH1cblxuICBnZW5lcmF0ZU1hY2hpbmVSZXN1bHQoZmlyc3QsIHNlY29uZCwgdGhpcmQpOiBBcnJheTxBcnJheTxudW1iZXI+PlxuICB7XG4gICAgdmFyIHJldCA9IEFycmF5PEFycmF5PG51bWJlcj4+KCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjsgaW5kZXgrKykge1xuICAgICAgcmV0LnB1c2godGhpcy5nZW5lcmF0ZVJlZWxSZXN1bHQoZmlyc3QsIHNlY29uZCwgdGhpcmQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdlbmVyYXRlUmVlbFJlc3VsdChmaXJzdCwgc2Vjb25kLCB0aGlyZCk6IEFycmF5PG51bWJlcj5cbiAge1xuICAgIHZhciBleGNsdWRpbmcgPSBBcnJheTxudW1iZXI+KCk7XG4gICAgdmFyIHJldCA9IEFycmF5PG51bWJlcj4oZmlyc3Qsc2Vjb25kLHRoaXJkKTtcbiAgICBcbiAgICBleGNsdWRpbmcucHVzaChmaXJzdCk7XG4gICAgZXhjbHVkaW5nLnB1c2goc2Vjb25kKTtcbiAgICBleGNsdWRpbmcucHVzaCh0aGlyZCk7XG4gICAgdmFyIGN1ck51bTtcbiAgICBpZihmaXJzdCA8IDApXG4gICAge1xuICAgICAgY3VyTnVtID0gdGhpcy5nZXRSYW5kb21OdW1iZXJFeGNsdWRpbmcoMCwgdGhpcy50aWxlVGV4dHVyZXMsIGV4Y2x1ZGluZyk7XG4gICAgICByZXRbMF0gPSBjdXJOdW07XG4gICAgICBleGNsdWRpbmcucHVzaChjdXJOdW0pO1xuICAgIH1cbiAgICBpZihzZWNvbmQgPCAwKVxuICAgIHtcbiAgICAgIGN1ck51bSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyRXhjbHVkaW5nKDAsIHRoaXMudGlsZVRleHR1cmVzLCBleGNsdWRpbmcpO1xuICAgICAgcmV0WzFdID0gY3VyTnVtO1xuICAgICAgZXhjbHVkaW5nLnB1c2goY3VyTnVtKTtcbiAgICB9XG4gICAgaWYodGhpcmQgPCAwKVxuICAgIHtcbiAgICAgIGN1ck51bSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyRXhjbHVkaW5nKDAsIHRoaXMudGlsZVRleHR1cmVzLCBleGNsdWRpbmcpO1xuICAgICAgcmV0WzJdID0gY3VyTnVtO1xuICAgICAgZXhjbHVkaW5nLnB1c2goY3VyTnVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZ2V0UmFuZG9tTnVtYmVyQmV0d2VlbihtaW4sIG1heCk6IG51bWJlclxuICB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xuICB9XG5cbiAgZ2V0VW5pcXVlUmFuZG9tTnVtYmVyc0JldHdlZW4obWluLCBtYXgsIGFtb3VudCk6IEFycmF5PG51bWJlcj5cbiAge1xuICAgIHZhciByZXQgPSBBcnJheTxudW1iZXI+KCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFtb3VudDsgaW5kZXgrKykge1xuICAgICAgdmFyIGFkZGVkID0gZmFsc2U7XG4gICAgICB3aGlsZSghYWRkZWQpXG4gICAgICB7XG4gICAgICAgIHZhciBjdXJOdW0gPSB0aGlzLmdldFJhbmRvbU51bWJlckJldHdlZW4obWluLCBtYXgpO1xuICAgICAgICBpZihyZXQuaW5kZXhPZihjdXJOdW0pIDwgMClcbiAgICAgICAge1xuICAgICAgICAgIHJldC5wdXNoKGN1ck51bSk7XG4gICAgICAgICAgYWRkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldFJhbmRvbU51bWJlckV4Y2x1ZGluZyhtaW4sIG1heCwgZXhjbHVkaW5nKTogbnVtYmVyXG4gIHtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICB3aGlsZSghZm91bmQpXG4gICAge1xuICAgICAgdmFyIGN1ck51bSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyQmV0d2VlbihtaW4sIG1heCk7XG4gICAgICBpZihleGNsdWRpbmcuaW5kZXhPZihjdXJOdW0pIDw9IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBjdXJOdW07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
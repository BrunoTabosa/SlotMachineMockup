
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/slots/Tile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23da8goMpRLyoF0XDrNCKrG', 'Tile');
// scripts/slots/Tile.ts

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
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textures = [];
        return _this;
    }
    Tile.prototype.start = function () {
    };
    Tile.prototype.onLoad = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTextures()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tile.prototype.resetInEditor = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTextures()];
                    case 1:
                        _a.sent();
                        this.setRandom();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tile.prototype.loadTextures = function () {
        return __awaiter(this, void 0, Promise, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                return [2 /*return*/, new Promise(function (resolve) {
                        cc.loader.loadResDir('gfx/Square', cc.SpriteFrame, function afterLoad(err, loadedTextures) {
                            self.textures = loadedTextures;
                            resolve(true);
                        });
                    })];
            });
        });
    };
    Tile.prototype.setTile = function (index) {
        this.curIndex = index;
        this.node.getComponent(cc.Sprite).spriteFrame = this.textures[index];
    };
    Tile.prototype.setRandom = function () {
        var randomIndex = Math.floor(Math.random() * this.textures.length);
        this.setTile(randomIndex);
    };
    Tile.prototype.toggleAnimation = function (winnersIndexes) {
        if (this.animation == null) {
            this.animation = this.node.children[0];
        }
        console.log(this.node.getComponent(cc.Sprite).spriteFrame.name);
        this.animation.active = winnersIndexes.indexOf(this.curIndex) >= 0;
    };
    Tile.prototype.setAnimation = function (value) {
        if (this.animation == null) {
            this.animation = this.node.children[0];
        }
        this.animation.active = value;
    };
    __decorate([
        property({ type: [cc.SpriteFrame], visible: true })
    ], Tile.prototype, "textures", void 0);
    __decorate([
        property({ type: [cc.Node], visible: true })
    ], Tile.prototype, "animation", void 0);
    Tile = __decorate([
        ccclass
    ], Tile);
    return Tile;
}(cc.Component));
exports.default = Tile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2xvdHNcXFRpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUEwREM7UUF4RFMsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUF3RHhCLENBQUM7SUFsREMsb0JBQUssR0FBTDtJQUVBLENBQUM7SUFFSyxxQkFBTSxHQUFaO3VDQUFnQixPQUFPOzs7NEJBQ3JCLHFCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7Ozs7O0tBQzNCO0lBRUssNEJBQWEsR0FBbkI7dUNBQXVCLE9BQU87Ozs0QkFDNUIscUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOzs7OztLQUNsQjtJQUVLLDJCQUFZLEdBQWxCO3VDQUFzQixPQUFPOzs7Z0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLHNCQUFPLElBQUksT0FBTyxDQUFVLFVBQUEsT0FBTzt3QkFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFLGNBQWM7NEJBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDOzRCQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hCLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxFQUFDOzs7S0FDSjtJQUVELHNCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsd0JBQVMsR0FBVDtRQUNFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixjQUE2QjtRQUMzQyxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUN6QjtZQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCwyQkFBWSxHQUFaLFVBQWEsS0FBSztRQUNoQixJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUN6QjtZQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFFaEMsQ0FBQztJQXZERDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7MENBQzlCO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQzsyQ0FDekI7SUFMQyxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMER4QjtJQUFELFdBQUM7Q0ExREQsQUEwREMsQ0ExRGlDLEVBQUUsQ0FBQyxTQUFTLEdBMEQ3QztrQkExRG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sIHZpc2libGU6IHRydWUgfSlcbiAgcHJpdmF0ZSB0ZXh0dXJlcyA9IFtdO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogW2NjLk5vZGVdLCB2aXNpYmxlOiB0cnVlfSlcbiAgcHJpdmF0ZSBhbmltYXRpb247XG4gIHByaXZhdGUgY3VySW5kZXg7XG5cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgXG4gIH1cblxuICBhc3luYyBvbkxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5sb2FkVGV4dHVyZXMoKTtcbiAgfVxuXG4gIGFzeW5jIHJlc2V0SW5FZGl0b3IoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5sb2FkVGV4dHVyZXMoKTtcbiAgICB0aGlzLnNldFJhbmRvbSgpO1xuICB9XG5cbiAgYXN5bmMgbG9hZFRleHR1cmVzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKCdnZngvU3F1YXJlJywgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIGFmdGVyTG9hZChlcnIsIGxvYWRlZFRleHR1cmVzKSB7XG4gICAgICAgIHNlbGYudGV4dHVyZXMgPSBsb2FkZWRUZXh0dXJlcztcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VGlsZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJJbmRleCA9IGluZGV4O1xuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMudGV4dHVyZXNbaW5kZXhdO1xuICB9XG5cbiAgc2V0UmFuZG9tKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXh0dXJlcy5sZW5ndGgpO1xuICAgIHRoaXMuc2V0VGlsZShyYW5kb21JbmRleCk7XG4gIH1cblxuICB0b2dnbGVBbmltYXRpb24od2lubmVyc0luZGV4ZXM6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICBpZih0aGlzLmFuaW1hdGlvbiA9PSBudWxsKVxuICAgIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUubmFtZSk7XG4gICAgdGhpcy5hbmltYXRpb24uYWN0aXZlID0gd2lubmVyc0luZGV4ZXMuaW5kZXhPZih0aGlzLmN1ckluZGV4KSA+PSAwOyAgICBcbiAgfVxuXG4gIHNldEFuaW1hdGlvbih2YWx1ZSk6IHZvaWR7XG4gICAgaWYodGhpcy5hbmltYXRpb24gPT0gbnVsbClcbiAgICB7XG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMubm9kZS5jaGlsZHJlblswXTtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb24uYWN0aXZlID0gdmFsdWU7XG4gICAgXG4gIH1cbn1cbiJdfQ==
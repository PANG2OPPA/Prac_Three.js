const _0x1ed7c7=_0x17ab;(function(_0x252df6,_0x25b99e){const _0x248131=_0x17ab,_0x9b408b=_0x252df6();while(!![]){try{const _0x2eb514=parseInt(_0x248131(0x201))/0x1+parseInt(_0x248131(0x1fc))/0x2*(-parseInt(_0x248131(0x1f7))/0x3)+-parseInt(_0x248131(0x211))/0x4*(-parseInt(_0x248131(0x1fe))/0x5)+-parseInt(_0x248131(0x214))/0x6+parseInt(_0x248131(0x221))/0x7*(-parseInt(_0x248131(0x21f))/0x8)+parseInt(_0x248131(0x20b))/0x9*(parseInt(_0x248131(0x208))/0xa)+parseInt(_0x248131(0x20e))/0xb;if(_0x2eb514===_0x25b99e)break;else _0x9b408b['push'](_0x9b408b['shift']());}catch(_0x5b3954){_0x9b408b['push'](_0x9b408b['shift']());}}}(_0x1f19,0xedbbe));import{LineBasicMaterial,BufferAttribute,Box3,Group,MeshBasicMaterial,Object3D,BufferGeometry}from'../../../build/three.module.js';import{arrayToBox}from'../utils/ArrayBoxUtilities.js';function _0x17ab(_0x46f614,_0x522fa5){const _0x1f197a=_0x1f19();return _0x17ab=function(_0x17ab39,_0x16544d){_0x17ab39=_0x17ab39-0x1f4;let _0x407674=_0x1f197a[_0x17ab39];return _0x407674;},_0x17ab(_0x46f614,_0x522fa5);}const boundingBox=new Box3();class MeshBVHRootVisualizer extends Object3D{get[_0x1ed7c7(0x209)](){const _0x5d468e=_0x1ed7c7;return!this[_0x5d468e(0x20c)];}get['isLineSegments'](){const _0x39d214=_0x1ed7c7;return this[_0x39d214(0x20c)];}get[_0x1ed7c7(0x217)](){const _0x190f69=_0x1ed7c7;return this[_0x190f69(0x20c)];}constructor(_0x4e7225,_0x1f27f2,_0x248079=0xa,_0x44cd6c=0x0){const _0x325409=_0x1ed7c7;super(),this[_0x325409(0x20f)]=_0x1f27f2,this[_0x325409(0x1f5)]=new BufferGeometry(),this[_0x325409(0x212)]=_0x325409(0x216),this['depth']=_0x248079,this[_0x325409(0x21a)]=![],this[_0x325409(0x213)]=_0x4e7225,this[_0x325409(0x20c)]=!![],this[_0x325409(0x205)]=_0x44cd6c;}[_0x1ed7c7(0x21b)](){}[_0x1ed7c7(0x200)](){const _0x5317cc=_0x1ed7c7,_0x2d3509=this[_0x5317cc(0x1f5)],_0x1007bb=this[_0x5317cc(0x213)][_0x5317cc(0x1f5)][_0x5317cc(0x202)],_0x33cc26=this[_0x5317cc(0x205)];_0x2d3509[_0x5317cc(0x207)](),this[_0x5317cc(0x21e)]=![];if(_0x1007bb){const _0x21e04b=this[_0x5317cc(0x1fd)]-0x1,_0x2239b1=this[_0x5317cc(0x21a)];let _0x2be068=0x0;_0x1007bb[_0x5317cc(0x215)]((_0x29dd31,_0x2d6d58)=>{if(_0x29dd31===_0x21e04b||_0x2d6d58)return _0x2be068++,!![];else _0x2239b1&&_0x2be068++;},_0x33cc26);let _0x9de77c=0x0;const _0x50b6e1=new Float32Array(0x8*0x3*_0x2be068);_0x1007bb[_0x5317cc(0x215)]((_0x118c37,_0x508518,_0x18f75f)=>{const _0x566979=_0x118c37===_0x21e04b||_0x508518;if(_0x566979||_0x2239b1){arrayToBox(0x0,_0x18f75f,boundingBox);const {min:_0x55174d,max:_0x26c11c}=boundingBox;for(let _0x15ae63=-0x1;_0x15ae63<=0x1;_0x15ae63+=0x2){const _0x2bf366=_0x15ae63<0x0?_0x55174d['x']:_0x26c11c['x'];for(let _0x250ba1=-0x1;_0x250ba1<=0x1;_0x250ba1+=0x2){const _0x4b4a2d=_0x250ba1<0x0?_0x55174d['y']:_0x26c11c['y'];for(let _0x468530=-0x1;_0x468530<=0x1;_0x468530+=0x2){const _0x198d4d=_0x468530<0x0?_0x55174d['z']:_0x26c11c['z'];_0x50b6e1[_0x9de77c+0x0]=_0x2bf366,_0x50b6e1[_0x9de77c+0x1]=_0x4b4a2d,_0x50b6e1[_0x9de77c+0x2]=_0x198d4d,_0x9de77c+=0x3;}}}return _0x566979;}},_0x33cc26);let _0x3d3ef8,_0x213f1b;this[_0x5317cc(0x20c)]?_0x213f1b=new Uint8Array([0x0,0x4,0x1,0x5,0x2,0x6,0x3,0x7,0x0,0x2,0x1,0x3,0x4,0x6,0x5,0x7,0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7]):_0x213f1b=new Uint8Array([0x0,0x1,0x2,0x2,0x1,0x3,0x4,0x6,0x5,0x6,0x7,0x5,0x1,0x4,0x5,0x0,0x4,0x1,0x2,0x3,0x6,0x3,0x7,0x6,0x0,0x2,0x4,0x2,0x6,0x4,0x1,0x5,0x3,0x3,0x5,0x7]);_0x50b6e1[_0x5317cc(0x1ff)]>0xffff?_0x3d3ef8=new Uint32Array(_0x213f1b[_0x5317cc(0x1ff)]*_0x2be068):_0x3d3ef8=new Uint16Array(_0x213f1b['length']*_0x2be068);const _0x1f30ac=_0x213f1b[_0x5317cc(0x1ff)];for(let _0x5b7ff9=0x0;_0x5b7ff9<_0x2be068;_0x5b7ff9++){const _0x14e799=_0x5b7ff9*0x8,_0x400e09=_0x5b7ff9*_0x1f30ac;for(let _0xe40904=0x0;_0xe40904<_0x1f30ac;_0xe40904++){_0x3d3ef8[_0x400e09+_0xe40904]=_0x14e799+_0x213f1b[_0xe40904];}}_0x2d3509[_0x5317cc(0x210)](new BufferAttribute(_0x3d3ef8,0x1,![])),_0x2d3509['setAttribute'](_0x5317cc(0x220),new BufferAttribute(_0x50b6e1,0x3,![])),this[_0x5317cc(0x21e)]=!![];}}}function _0x1f19(){const _0x1b8746=['_group','MeshBVHVisualizer','dispose','80oQnvhU','isMesh','color','1893501xtnybB','displayEdges','updateMatrixWorld','23544939NsyYkP','material','setIndex','1177420jyomoZ','name','mesh','10278444WffcWr','traverse','MeshBVHRootVisualizer','isLine','scale','rotation','displayParents','raycast','remove','clone','visible','16HdKOuk','position','1417255xoETsM','_roots','add','geometry','push','18543wYYqRQ','edgeMaterial','pop','children','copy','386Czhzyv','depth','5xVITjT','length','update','166779qoOYAD','boundsTree','meshMaterial','opacity'];_0x1f19=function(){return _0x1b8746;};return _0x1f19();}class MeshBVHVisualizer extends Group{get[_0x1ed7c7(0x20a)](){const _0x4e53e4=_0x1ed7c7;return this[_0x4e53e4(0x1f8)][_0x4e53e4(0x20a)];}get[_0x1ed7c7(0x204)](){return this['edgeMaterial']['opacity'];}set[_0x1ed7c7(0x204)](_0x5698c9){const _0x120f92=_0x1ed7c7;this[_0x120f92(0x1f8)][_0x120f92(0x204)]=_0x5698c9,this[_0x120f92(0x203)][_0x120f92(0x204)]=_0x5698c9;}constructor(_0x797c39,_0x59c3ba=0xa){const _0x108ba7=_0x1ed7c7;super(),this[_0x108ba7(0x212)]=_0x108ba7(0x206),this['depth']=_0x59c3ba,this[_0x108ba7(0x213)]=_0x797c39,this[_0x108ba7(0x21a)]=![],this[_0x108ba7(0x20c)]=!![],this[_0x108ba7(0x222)]=[];const _0x190c0b=new LineBasicMaterial({'color':0xff88,'transparent':!![],'opacity':0.3,'depthWrite':![]}),_0x365c1c=new MeshBasicMaterial({'color':0xff88,'transparent':!![],'opacity':0.3,'depthWrite':![]});_0x365c1c[_0x108ba7(0x20a)]=_0x190c0b[_0x108ba7(0x20a)],this[_0x108ba7(0x1f8)]=_0x190c0b,this[_0x108ba7(0x203)]=_0x365c1c,this[_0x108ba7(0x200)]();}[_0x1ed7c7(0x200)](){const _0x224bd5=_0x1ed7c7,_0x2de82a=this['mesh']['geometry']['boundsTree'],_0x30b185=_0x2de82a?_0x2de82a[_0x224bd5(0x222)][_0x224bd5(0x1ff)]:0x0;while(this[_0x224bd5(0x222)][_0x224bd5(0x1ff)]>_0x30b185){const _0x42ea36=this[_0x224bd5(0x222)][_0x224bd5(0x1f9)]();_0x42ea36[_0x224bd5(0x1f5)][_0x224bd5(0x207)](),this[_0x224bd5(0x21c)](_0x42ea36);}for(let _0x26cd3c=0x0;_0x26cd3c<_0x30b185;_0x26cd3c++){if(_0x26cd3c>=this[_0x224bd5(0x222)]['length']){const _0x5a979a=new MeshBVHRootVisualizer(this['mesh'],this[_0x224bd5(0x1f8)],this[_0x224bd5(0x1fd)],_0x26cd3c);this[_0x224bd5(0x1f4)](_0x5a979a),this[_0x224bd5(0x222)][_0x224bd5(0x1f6)](_0x5a979a);}const _0x36d17a=this['_roots'][_0x26cd3c];_0x36d17a[_0x224bd5(0x1fd)]=this[_0x224bd5(0x1fd)],_0x36d17a[_0x224bd5(0x213)]=this[_0x224bd5(0x213)],_0x36d17a['displayParents']=this[_0x224bd5(0x21a)],_0x36d17a[_0x224bd5(0x20c)]=this[_0x224bd5(0x20c)],_0x36d17a['material']=this[_0x224bd5(0x20c)]?this['edgeMaterial']:this[_0x224bd5(0x203)],_0x36d17a[_0x224bd5(0x200)]();}}[_0x1ed7c7(0x20d)](..._0x5ccd5d){const _0x48a0b6=_0x1ed7c7;this[_0x48a0b6(0x220)][_0x48a0b6(0x1fb)](this['mesh'][_0x48a0b6(0x220)]),this[_0x48a0b6(0x219)][_0x48a0b6(0x1fb)](this[_0x48a0b6(0x213)]['rotation']),this[_0x48a0b6(0x218)][_0x48a0b6(0x1fb)](this[_0x48a0b6(0x213)][_0x48a0b6(0x218)]),super['updateMatrixWorld'](..._0x5ccd5d);}['copy'](_0x3b7129){const _0x56a5a8=_0x1ed7c7;this[_0x56a5a8(0x1fd)]=_0x3b7129[_0x56a5a8(0x1fd)],this[_0x56a5a8(0x213)]=_0x3b7129[_0x56a5a8(0x213)];}[_0x1ed7c7(0x21d)](){const _0x34d8c6=_0x1ed7c7;return new MeshBVHVisualizer(this[_0x34d8c6(0x213)],this[_0x34d8c6(0x1fd)]);}[_0x1ed7c7(0x207)](){const _0x39371d=_0x1ed7c7;this[_0x39371d(0x1f8)]['dispose'](),this[_0x39371d(0x203)][_0x39371d(0x207)]();const _0x38fa08=this[_0x39371d(0x1fa)];for(let _0x31bf8d=0x0,_0x140005=_0x38fa08[_0x39371d(0x1ff)];_0x31bf8d<_0x140005;_0x31bf8d++){_0x38fa08[_0x31bf8d]['geometry'][_0x39371d(0x207)]();}}}export{MeshBVHVisualizer};
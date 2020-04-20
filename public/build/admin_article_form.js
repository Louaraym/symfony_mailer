(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin_article_form"],{

/***/ "./assets/js/admin_article_form.js":
/*!*****************************************!*\
  !*** ./assets/js/admin_article_form.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.weak-set */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





dropzone__WEBPACK_IMPORTED_MODULE_13___default.a.autoDiscover = false;
jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
  var $autoComplete = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-user-autocomplete');

  if (!$autoComplete.is(':disabled')) {
    Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./components/algolia-autocomplete */ "./assets/js/components/algolia-autocomplete.js")).then(function (autocomplete) {
      autocomplete["default"]($autoComplete, 'users', 'email');
    });
  }

  var $referenceList = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-reference-list');

  if ($referenceList[0]) {
    var referenceList = new ReferenceList(jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-reference-list'));
    initializeDropzone(referenceList);
  }

  var $locationSelect = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-article-form-location');
  var $specificLocationTarget = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-specific-location-target');
  $locationSelect.on('change', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
      url: $locationSelect.data('specific-location-url'),
      data: {
        location: $locationSelect.val()
      },
      success: function success(html) {
        if (!html) {
          $specificLocationTarget.find('select').remove();
          $specificLocationTarget.addClass('d-none');
          return;
        } // Replace the current field and show


        $specificLocationTarget.html(html).removeClass('d-none');
      }
    });
  });
}); // todo - use Webpack Encore so ES6 syntax is transpiled to ES5

var ReferenceList =
/*#__PURE__*/
function () {
  function ReferenceList($element) {
    var _this = this;

    _classCallCheck(this, ReferenceList);

    var stuff = new WeakSet([]);
    this.$element = $element;
    this.sortable = sortablejs__WEBPACK_IMPORTED_MODULE_15__["default"].create(this.$element[0], {
      handle: '.drag-handle',
      animation: 150,
      onEnd: function onEnd() {
        jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
          url: _this.$element.data('url') + '/reorder',
          method: 'POST',
          data: JSON.stringify(_this.sortable.toArray())
        });
      }
    });
    this.references = [];
    this.render();
    this.$element.on('click', '.js-reference-delete', function (event) {
      _this.handleReferenceDelete(event);
    });
    this.$element.on('blur', '.js-edit-filename', function (event) {
      _this.handleReferenceEditFilename(event);
    });
    jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
      url: this.$element.data('url')
    }).then(function (data) {
      _this.references = data;

      _this.render();
    });
  }

  _createClass(ReferenceList, [{
    key: "addReference",
    value: function addReference(reference) {
      this.references.push(reference);
      this.render();
    }
  }, {
    key: "handleReferenceDelete",
    value: function handleReferenceDelete(event) {
      var _this2 = this;

      var $li = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      $li.addClass('disabled');
      jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
        url: '/admin/article/references/' + id,
        method: 'DELETE'
      }).then(function () {
        _this2.references = _this2.references.filter(function (reference) {
          return reference.id !== id;
        });

        _this2.render();
      });
    }
  }, {
    key: "handleReferenceEditFilename",
    value: function handleReferenceEditFilename(event) {
      var $li = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      var reference = this.references.find(function (reference) {
        return reference.id === id;
      });
      reference.originalFilename = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).val();
      jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
        url: '/admin/article/references/' + id,
        method: 'PUT',
        data: JSON.stringify(reference)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var itemsHtml = this.references.map(function (reference) {
        return "\n<li class=\"list-group-item d-flex justify-content-between align-items-center\" data-id=\"".concat(reference.id, "\">\n    <span class=\"drag-handle fa fa-reorder\"></span>\n    <input type=\"text\" value=\"").concat(reference.originalFilename, "\" class=\"form-control js-edit-filename\" style=\"width: auto;\">\n\n    <span>\n        <a href=\"/admin/article/references/").concat(reference.id, "/download\" class=\"btn btn-link btn-sm\"><span class=\"fa fa-download\" style=\"vertical-align: middle\"></span></a>\n        <button class=\"js-reference-delete btn btn-link btn-sm\"><span class=\"fa fa-trash\"></span></button>\n    </span>\n</li>\n");
      });
      this.$element.html(itemsHtml.join(''));
    }
  }]);

  return ReferenceList;
}();
/**
 * @param {ReferenceList} referenceList
 */


function initializeDropzone(referenceList) {
  var formElement = document.querySelector('.js-reference-dropzone');

  if (!formElement) {
    return;
  }

  var dropzone = new dropzone__WEBPACK_IMPORTED_MODULE_13___default.a(formElement, {
    paramName: 'reference',
    init: function init() {
      this.on('success', function (file, data) {
        referenceList.addReference(data);
      });
      this.on('error', function (file, data) {
        if (data.detail) {
          this.emit('error', file, data.detail);
        }
      });
    }
  });
}

/***/ })

},[["./assets/js/admin_article_form.js","runtime","vendors~admin_article_form~app~article_show","vendors~admin_article_form~app","vendors~admin_article_form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW5fYXJ0aWNsZV9mb3JtLmpzIl0sIm5hbWVzIjpbIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkYXV0b0NvbXBsZXRlIiwiaXMiLCJ0aGVuIiwiYXV0b2NvbXBsZXRlIiwiJHJlZmVyZW5jZUxpc3QiLCJyZWZlcmVuY2VMaXN0IiwiUmVmZXJlbmNlTGlzdCIsImluaXRpYWxpemVEcm9wem9uZSIsIiRsb2NhdGlvblNlbGVjdCIsIiRzcGVjaWZpY0xvY2F0aW9uVGFyZ2V0Iiwib24iLCJlIiwiYWpheCIsInVybCIsImRhdGEiLCJsb2NhdGlvbiIsInZhbCIsInN1Y2Nlc3MiLCJodG1sIiwiZmluZCIsInJlbW92ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCIkZWxlbWVudCIsInN0dWZmIiwiV2Vha1NldCIsInNvcnRhYmxlIiwiU29ydGFibGUiLCJjcmVhdGUiLCJoYW5kbGUiLCJhbmltYXRpb24iLCJvbkVuZCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b0FycmF5IiwicmVmZXJlbmNlcyIsInJlbmRlciIsImV2ZW50IiwiaGFuZGxlUmVmZXJlbmNlRGVsZXRlIiwiaGFuZGxlUmVmZXJlbmNlRWRpdEZpbGVuYW1lIiwicmVmZXJlbmNlIiwicHVzaCIsIiRsaSIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiaWQiLCJmaWx0ZXIiLCJvcmlnaW5hbEZpbGVuYW1lIiwiaXRlbXNIdG1sIiwibWFwIiwiam9pbiIsImZvcm1FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImRyb3B6b25lIiwicGFyYW1OYW1lIiwiaW5pdCIsImZpbGUiLCJhZGRSZWZlcmVuY2UiLCJkZXRhaWwiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FB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UUFBSSxFQUFFLGdCQUFXO0FBQ2IsV0FBSzlDLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLFVBQVMrQyxJQUFULEVBQWUzQyxJQUFmLEVBQXFCO0FBQ3BDVCxxQkFBYSxDQUFDcUQsWUFBZCxDQUEyQjVDLElBQTNCO0FBQ0gsT0FGRDtBQUlBLFdBQUtKLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVMrQyxJQUFULEVBQWUzQyxJQUFmLEVBQXFCO0FBQ2xDLFlBQUlBLElBQUksQ0FBQzZDLE1BQVQsRUFBaUI7QUFDYixlQUFLQyxJQUFMLENBQVUsT0FBVixFQUFtQkgsSUFBbkIsRUFBeUIzQyxJQUFJLENBQUM2QyxNQUE5QjtBQUNIO0FBQ0osT0FKRDtBQUtIO0FBWm9DLEdBQTFCLENBQWY7QUFjSCxDIiwiZmlsZSI6ImFkbWluX2FydGljbGVfZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuaW1wb3J0ICdkcm9wem9uZS9kaXN0L2Ryb3B6b25lLmNzcydcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRhdXRvQ29tcGxldGUgPSAkKCcuanMtdXNlci1hdXRvY29tcGxldGUnKTtcbiAgICBpZiAoISRhdXRvQ29tcGxldGUuaXMoJzpkaXNhYmxlZCcpKSB7XG4gICAgICAgIGltcG9ydCgnLi9jb21wb25lbnRzL2FsZ29saWEtYXV0b2NvbXBsZXRlJykudGhlbigoYXV0b2NvbXBsZXRlKSA9PiB7XG4gICAgICAgICAgICBhdXRvY29tcGxldGUuZGVmYXVsdCgkYXV0b0NvbXBsZXRlLCAndXNlcnMnLCAnZW1haWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgJHJlZmVyZW5jZUxpc3QgPSAkKCcuanMtcmVmZXJlbmNlLWxpc3QnKTtcbiAgICBpZiAoJHJlZmVyZW5jZUxpc3RbMF0pIHtcbiAgICAgICAgdmFyIHJlZmVyZW5jZUxpc3QgPSBuZXcgUmVmZXJlbmNlTGlzdCgkKCcuanMtcmVmZXJlbmNlLWxpc3QnKSk7XG4gICAgICAgIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KTtcbiAgICB9XG5cbiAgICB2YXIgJGxvY2F0aW9uU2VsZWN0ID0gJCgnLmpzLWFydGljbGUtZm9ybS1sb2NhdGlvbicpO1xuICAgIHZhciAkc3BlY2lmaWNMb2NhdGlvblRhcmdldCA9ICQoJy5qcy1zcGVjaWZpYy1sb2NhdGlvbi10YXJnZXQnKTtcblxuICAgICRsb2NhdGlvblNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAkbG9jYXRpb25TZWxlY3QuZGF0YSgnc3BlY2lmaWMtbG9jYXRpb24tdXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICRsb2NhdGlvblNlbGVjdC52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICRzcGVjaWZpY0xvY2F0aW9uVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcbiAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldFxuICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbi8vIHRvZG8gLSB1c2UgV2VicGFjayBFbmNvcmUgc28gRVM2IHN5bnRheCBpcyB0cmFuc3BpbGVkIHRvIEVTNVxuY2xhc3MgUmVmZXJlbmNlTGlzdFxue1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdHVmZiA9IG5ldyBXZWFrU2V0KFtdKTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc29ydGFibGUgPSBTb3J0YWJsZS5jcmVhdGUodGhpcy4kZWxlbWVudFswXSwge1xuICAgICAgICAgICAgaGFuZGxlOiAnLmRyYWctaGFuZGxlJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuJGVsZW1lbnQuZGF0YSgndXJsJykrJy9yZW9yZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRoaXMuc29ydGFibGUudG9BcnJheSgpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0gW107XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2snLCAnLmpzLXJlZmVyZW5jZS1kZWxldGUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVmZXJlbmNlRGVsZXRlKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignYmx1cicsICcuanMtZWRpdC1maWxlbmFtZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZWZlcmVuY2VFZGl0RmlsZW5hbWUoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLiRlbGVtZW50LmRhdGEoJ3VybCcpXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZXMgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVmZXJlbmNlRGVsZXRlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnLmxpc3QtZ3JvdXAtaXRlbScpO1xuICAgICAgICBjb25zdCBpZCA9ICRsaS5kYXRhKCdpZCcpO1xuICAgICAgICAkbGkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9hZG1pbi9hcnRpY2xlL3JlZmVyZW5jZXMvJytpZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZXMgPSB0aGlzLnJlZmVyZW5jZXMuZmlsdGVyKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZS5pZCAhPT0gaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVJlZmVyZW5jZUVkaXRGaWxlbmFtZShldmVudCkge1xuICAgICAgICBjb25zdCAkbGkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJy5saXN0LWdyb3VwLWl0ZW0nKTtcbiAgICAgICAgY29uc3QgaWQgPSAkbGkuZGF0YSgnaWQnKTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWZlcmVuY2UuaWQgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVmZXJlbmNlLm9yaWdpbmFsRmlsZW5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvYWRtaW4vYXJ0aWNsZS9yZWZlcmVuY2VzLycraWQsXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zSHRtbCA9IHRoaXMucmVmZXJlbmNlcy5tYXAocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG48bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiIGRhdGEtaWQ9XCIke3JlZmVyZW5jZS5pZH1cIj5cbiAgICA8c3BhbiBjbGFzcz1cImRyYWctaGFuZGxlIGZhIGZhLXJlb3JkZXJcIj48L3NwYW4+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3JlZmVyZW5jZS5vcmlnaW5hbEZpbGVuYW1lfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGpzLWVkaXQtZmlsZW5hbWVcIiBzdHlsZT1cIndpZHRoOiBhdXRvO1wiPlxuXG4gICAgPHNwYW4+XG4gICAgICAgIDxhIGhyZWY9XCIvYWRtaW4vYXJ0aWNsZS9yZWZlcmVuY2VzLyR7cmVmZXJlbmNlLmlkfS9kb3dubG9hZFwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZG93bmxvYWRcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGVcIj48L3NwYW4+PC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtcmVmZXJlbmNlLWRlbGV0ZSBidG4gYnRuLWxpbmsgYnRuLXNtXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvc3Bhbj48L2J1dHRvbj5cbiAgICA8L3NwYW4+XG48L2xpPlxuYFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaXRlbXNIdG1sLmpvaW4oJycpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWZlcmVuY2VMaXN0fSByZWZlcmVuY2VMaXN0XG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KSB7XG4gICAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlZmVyZW5jZS1kcm9wem9uZScpO1xuICAgIGlmICghZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkcm9wem9uZSA9IG5ldyBEcm9wem9uZShmb3JtRWxlbWVudCwge1xuICAgICAgICBwYXJhbU5hbWU6ICdyZWZlcmVuY2UnLFxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihmaWxlLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTGlzdC5hZGRSZWZlcmVuY2UoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbignZXJyb3InLCBmdW5jdGlvbihmaWxlLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBmaWxlLCBkYXRhLmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
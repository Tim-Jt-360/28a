(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"hash": "05d676179dbe724f3cfda115a9e27c29ababb9f75d57fe895ac21cac0ec07c0b", "definitions": [{"thumbnailUrl":"media/panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71_t.webp","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"url":"media/panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71_0/{face}/0/{row}_{column}.webp","colCount":48,"tags":"ondemand","class":"TiledImageResourceLevel","width":24576},{"rowCount":4,"height":2048,"url":"media/panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71_0/{face}/1/{row}_{column}.webp","colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71_0/{face}/2/{row}_{column}.webp","colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71_0/{face}/3/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}]}}],"hfovMax":130,"hfov":360,"vfov":180,"label":trans('panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71.label'),"id":"panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71","data":{"label":"Sch\u00fcepwis 28a"}},{"width":"100%","subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderRadius":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"progressRight":"33%","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","playbackBarLeft":0,"vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","progressBarBorderColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","playbackBarHeadShadow":true,"subtitlesBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingTop":4,"progressBorderSize":0,"class":"ViewerArea","progressBarBorderRadius":2,"firstTransitionDuration":0,"propagateClick":false,"progressBarBorderSize":0,"toolTipShadowColor":"#333138","progressHeight":2,"minHeight":50,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"minWidth":100,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"progressLeft":"33%","toolTipFontSize":"1.11vmin","toolTipTextShadowColor":"#000000","height":"100%","subtitlesTextShadowHorizontalLength":1,"toolTipBorderColor":"#767676","playbackBarRight":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial"},{"initialSequence":"this.sequence_048BAB5E_15C7_E457_41AE_AEC68C76065A","class":"PanoramaCamera","id":"panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"id":"mainPlayList","items":[{"camera":"this.panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71_camera","media":"this.panorama_54A23BE1_59C5_8997_41C7_7547EF07BA71","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_048BAB5E_15C7_E457_41AE_AEC68C76065A"}],"watermark":false,"id":"rootPlayer","scripts":{"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"registerKey":TDV.Tour.Script.registerKey,"initQuiz":TDV.Tour.Script.initQuiz,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"openLink":TDV.Tour.Script.openLink,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getOverlays":TDV.Tour.Script.getOverlays,"toggleVR":TDV.Tour.Script.toggleVR,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"clone":TDV.Tour.Script.clone,"setValue":TDV.Tour.Script.setValue,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"mixObject":TDV.Tour.Script.mixObject,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getKey":TDV.Tour.Script.getKey,"disableVR":TDV.Tour.Script.disableVR,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPixels":TDV.Tour.Script.getPixels,"enableVR":TDV.Tour.Script.enableVR,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"historyGoForward":TDV.Tour.Script.historyGoForward,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"unloadViewer":TDV.Tour.Script.unloadViewer,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"initAnalytics":TDV.Tour.Script.initAnalytics,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"init":TDV.Tour.Script.init,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMapLocation":TDV.Tour.Script.setMapLocation,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizFinish":TDV.Tour.Script.quizFinish,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"executeJS":TDV.Tour.Script.executeJS,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoBack":TDV.Tour.Script.historyGoBack,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"createTween":TDV.Tour.Script.createTween,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizShowScore":TDV.Tour.Script.quizShowScore,"showWindowBase":TDV.Tour.Script.showWindowBase,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"showWindow":TDV.Tour.Script.showWindow,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"translate":TDV.Tour.Script.translate,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"existsKey":TDV.Tour.Script.existsKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setLocale":TDV.Tour.Script.setLocale},"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"data":{"locales":{"es":"locale/es.txt"},"name":"Player7089","displayTooltipInTouchScreens":true,"defaultLocale":"es","history":{},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false}},"xrPanelsEnabled":true,"start":"this.init()","backgroundColorRatios":[0],"class":"Player","gap":10,"propagateClick":false,"layout":"absolute","minWidth":0,"minHeight":0,"scrollBarColor":"#000000","height":"100%","defaultMenu":["fullscreen","mute","rotation"],"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Tue Oct 20 2026
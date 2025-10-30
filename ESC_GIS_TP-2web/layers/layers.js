var wms_layers = [];

var lyr_NearmapWMS_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://api.nearmap.com/wms/v1/latest/apikey/YTNiMjg0ODktNmI0Yy00YTVmLTkwMTAtY2E4MzNiOTBhYmMy",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Nearmap/Nearmap/Australia",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Nearmap WMS',
                            popuplayertitle: 'Nearmap WMS',
                            opacity: 0.300000,
                            
                            
                          });
              wms_layers.push([lyr_NearmapWMS_0, 0]);
var format_VW_PR_ROADS_1 = new ol.format.GeoJSON();
var features_VW_PR_ROADS_1 = format_VW_PR_ROADS_1.readFeatures(json_VW_PR_ROADS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VW_PR_ROADS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VW_PR_ROADS_1.addFeatures(features_VW_PR_ROADS_1);
var lyr_VW_PR_ROADS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VW_PR_ROADS_1, 
                style: style_VW_PR_ROADS_1,
                popuplayertitle: 'VW_PR_ROADS',
                interactive: true,
                title: '<img src="styles/legend/VW_PR_ROADS_1.png" /> VW_PR_ROADS'
            });
var format_ESC_TPmergsmplsimplified_2 = new ol.format.GeoJSON();
var features_ESC_TPmergsmplsimplified_2 = format_ESC_TPmergsmplsimplified_2.readFeatures(json_ESC_TPmergsmplsimplified_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESC_TPmergsmplsimplified_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESC_TPmergsmplsimplified_2.addFeatures(features_ESC_TPmergsmplsimplified_2);
var lyr_ESC_TPmergsmplsimplified_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESC_TPmergsmplsimplified_2, 
                style: style_ESC_TPmergsmplsimplified_2,
                popuplayertitle: 'ESC_TP-merg-smpl — simplified',
                interactive: true,
    title: 'ESC_TP-merg-smpl — simplified<br />\
    <img src="styles/legend/ESC_TPmergsmplsimplified_2_0.png" /> Bus Zone<br />\
    <img src="styles/legend/ESC_TPmergsmplsimplified_2_1.png" /> Timed Parking<br />\
    <img src="styles/legend/ESC_TPmergsmplsimplified_2_2.png" /> Loading Zone<br />\
    <img src="styles/legend/ESC_TPmergsmplsimplified_2_3.png" /> No Parking<br />\
    <img src="styles/legend/ESC_TPmergsmplsimplified_2_4.png" /> Taxi Zone<br />\
    <img src="styles/legend/ESC_TPmergsmplsimplified_2_5.png" /> Untimed Parking<br />\
    <img src="styles/legend/ESC_TPmergsmplsimplified_2_6.png" /> <br />' });
var group_REFERENCE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'REFERENCE'});
var group_TimedPArking = new ol.layer.Group({
                                layers: [lyr_ESC_TPmergsmplsimplified_2,],
                                fold: 'open',
                                title: 'Timed PArking'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_NearmapWMS_0,lyr_VW_PR_ROADS_1,],
                                fold: 'close',
                                title: 'BASEMAP'});

lyr_NearmapWMS_0.setVisible(true);lyr_VW_PR_ROADS_1.setVisible(true);lyr_ESC_TPmergsmplsimplified_2.setVisible(true);
var layersList = [group_BASEMAP,group_TimedPArking];
lyr_VW_PR_ROADS_1.set('fieldAliases', {'GID': 'GID', 'STR_NAME': 'STR_NAME', 'COMMENTS': 'COMMENTS', 'SUBURB': 'SUBURB', });
lyr_ESC_TPmergsmplsimplified_2.set('fieldAliases', {'fid': 'fid', 'Zone_Type': 'Zone_Type', 'Parking_Du': 'Parking_Du', 'Duration_O': 'Duration_O', 'Time_Begin': 'Time_Begin', 'Time_End': 'Time_End', 'Day_Beginn': 'Day_Beginn', 'Day_Ending': 'Day_Ending', 'Secondary_': 'Secondary_', 'Parking_D2': 'Parking_D2', 'Duration_2': 'Duration_2', 'Time_Begi2': 'Time_Begi2', 'Time_End2': 'Time_End2', 'Day_Begin2': 'Day_Begin2', 'Day_Endin2': 'Day_Endin2', 'Photo_of_S': 'Photo_of_S', 'Within_CBD': 'Within_CBD', 'Comments': 'Comments', 'Parking_ID': 'Parking_ID', 'Time_Captu': 'Time_Captu', 'Date_Captu': 'Date_Captu', 'layer': 'layer', 'path': 'path', });
lyr_VW_PR_ROADS_1.set('fieldImages', {'GID': 'TextEdit', 'STR_NAME': 'TextEdit', 'COMMENTS': 'TextEdit', 'SUBURB': 'TextEdit', });
lyr_ESC_TPmergsmplsimplified_2.set('fieldImages', {'fid': '', 'Zone_Type': '', 'Parking_Du': '', 'Duration_O': '', 'Time_Begin': '', 'Time_End': '', 'Day_Beginn': '', 'Day_Ending': '', 'Secondary_': '', 'Parking_D2': '', 'Duration_2': '', 'Time_Begi2': '', 'Time_End2': '', 'Day_Begin2': '', 'Day_Endin2': '', 'Photo_of_S': '', 'Within_CBD': '', 'Comments': '', 'Parking_ID': '', 'Time_Captu': '', 'Date_Captu': '', 'layer': '', 'path': '', });
lyr_VW_PR_ROADS_1.set('fieldLabels', {'GID': 'no label', 'STR_NAME': 'no label', 'COMMENTS': 'no label', 'SUBURB': 'no label', });
lyr_ESC_TPmergsmplsimplified_2.set('fieldLabels', {'fid': 'no label', 'Zone_Type': 'no label', 'Parking_Du': 'no label', 'Duration_O': 'no label', 'Time_Begin': 'no label', 'Time_End': 'no label', 'Day_Beginn': 'no label', 'Day_Ending': 'no label', 'Secondary_': 'no label', 'Parking_D2': 'no label', 'Duration_2': 'no label', 'Time_Begi2': 'no label', 'Time_End2': 'no label', 'Day_Begin2': 'no label', 'Day_Endin2': 'no label', 'Photo_of_S': 'no label', 'Within_CBD': 'no label', 'Comments': 'no label', 'Parking_ID': 'no label', 'Time_Captu': 'no label', 'Date_Captu': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ESC_TPmergsmplsimplified_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
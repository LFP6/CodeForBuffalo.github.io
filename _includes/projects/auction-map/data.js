        var bounds = null;

        var map_4f5f9d848005489ba785ca362be66ab5 = L.map(
            'map_4f5f9d848005489ba785ca362be66ab5', {
                center: [42.9166, -78.892],
                zoom: 14,
                maxBounds: bounds,
                layers: [],
                worldCopyJump: false,
                crs: L.CRS.EPSG3857
            });


        var tile_layer_0ee86ad9ee7f4dc495438d3f3d4e9613 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiamJodXRjaCIsImEiOiJjamRqZGU1eTYxMTZlMzNvMjV2dGxzdG8wIn0.IAAk5wKeLXOUaQ4QYF3sEA'
        }).addTo(map_4f5f9d848005489ba785ca362be66ab5);


        var feature_group_36de2da8ef30485a94314d25f341b23e = L.featureGroup().addTo(map_4f5f9d848005489ba785ca362be66ab5);

        var marker_1a63d6f3376744269dd76fdbcaa727af = L.marker(
                [42.912904268809314, -78.89646013824498], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_36de2da8ef30485a94314d25f341b23e);

        var icon_f122e2955bb4417fb9cf77114799c2d2 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'red',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_1a63d6f3376744269dd76fdbcaa727af.setIcon(icon_f122e2955bb4417fb9cf77114799c2d2);

        var popup_6a3c7d9b4d8045ebb2f4f319afc8634d = L.popup({
            maxWidth: '300'
        });


        var html_51d039cff9f14b2cb6e57fa4a81a5644 = $('<div id="html_51d039cff9f14b2cb6e57fa4a81a5644" style="width: 100.0%; height: 100.0%;">Address 140 ALBANY, Property Class  APARTMENT</div>')[0];
        popup_6a3c7d9b4d8045ebb2f4f319afc8634d.setContent(html_51d039cff9f14b2cb6e57fa4a81a5644);


        marker_1a63d6f3376744269dd76fdbcaa727af.bindPopup(popup_6a3c7d9b4d8045ebb2f4f319afc8634d);




        var feature_group_040dac7c3fd7492f9f8dcb7f400d5c34 = L.featureGroup().addTo(map_4f5f9d848005489ba785ca362be66ab5);



        var marker_115a2b6bf9474b5babf7cb76a2ae1e6d = L.marker(
                [42.914435591497885, -78.89678117358712], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_ed0bb46652bf4e87b1b09ccfc238b08a = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_115a2b6bf9474b5babf7cb76a2ae1e6d.setIcon(icon_ed0bb46652bf4e87b1b09ccfc238b08a);


        var popup_3c75e2261a964f0292e440161cc54e5c = L.popup({
            maxWidth: '300'
        });


        var html_3527bbab85f646b4bcadfc7e7a57efc5 = $('<div id="html_3527bbab85f646b4bcadfc7e7a57efc5" style="width: 100.0%; height: 100.0%;">Address 19 ARKANSAS, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_3c75e2261a964f0292e440161cc54e5c.setContent(html_3527bbab85f646b4bcadfc7e7a57efc5);


        marker_115a2b6bf9474b5babf7cb76a2ae1e6d.bindPopup(popup_3c75e2261a964f0292e440161cc54e5c);





        var marker_336487fe28e74e19a74e4a47d164c3e2 = L.marker(
                [42.91412524026478, -78.89207562510364], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_ed177bcc70aa4f61bccc6303f41faf99 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_336487fe28e74e19a74e4a47d164c3e2.setIcon(icon_ed177bcc70aa4f61bccc6303f41faf99);


        var popup_4b100c05249b43eea72a5f5854532d17 = L.popup({
            maxWidth: '300'
        });


        var html_b8c65b6072de473eb94db823c7a3caf2 = $('<div id="html_b8c65b6072de473eb94db823c7a3caf2" style="width: 100.0%; height: 100.0%;">Address 141 ARKANSAS, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_4b100c05249b43eea72a5f5854532d17.setContent(html_b8c65b6072de473eb94db823c7a3caf2);


        marker_336487fe28e74e19a74e4a47d164c3e2.bindPopup(popup_4b100c05249b43eea72a5f5854532d17);





        var marker_98491b187ea44d70b849fb7a9ec337a8 = L.marker(
                [42.913702436726886, -78.88706092717639], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_2cca762bc2cf4803b17d3f29599d08b5 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_98491b187ea44d70b849fb7a9ec337a8.setIcon(icon_2cca762bc2cf4803b17d3f29599d08b5);


        var popup_46ae8e93d4784c138f78f5aa0fc9e2f7 = L.popup({
            maxWidth: '300'
        });


        var html_e00e4d396d234d7d9b23f55929428d1a = $('<div id="html_e00e4d396d234d7d9b23f55929428d1a" style="width: 100.0%; height: 100.0%;">Address 96 EIGHTEENTH, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_46ae8e93d4784c138f78f5aa0fc9e2f7.setContent(html_e00e4d396d234d7d9b23f55929428d1a);


        marker_98491b187ea44d70b849fb7a9ec337a8.bindPopup(popup_46ae8e93d4784c138f78f5aa0fc9e2f7);





        var marker_c71562687ab449889682917f3d92c0a2 = L.marker(
                [42.91872241065155, -78.89797303966287], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_3d6e0f3d32c34648aec3bca9a7dc72f3 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_c71562687ab449889682917f3d92c0a2.setIcon(icon_3d6e0f3d32c34648aec3bca9a7dc72f3);


        var popup_7b071c27d8574b08b9ee81c6c76462c5 = L.popup({
            maxWidth: '300'
        });


        var html_a64a323e15104cf7baf34ecd5fc03f99 = $('<div id="html_a64a323e15104cf7baf34ecd5fc03f99" style="width: 100.0%; height: 100.0%;">Address 70 AUBURN, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_7b071c27d8574b08b9ee81c6c76462c5.setContent(html_a64a323e15104cf7baf34ecd5fc03f99);


        marker_c71562687ab449889682917f3d92c0a2.bindPopup(popup_7b071c27d8574b08b9ee81c6c76462c5);





        var marker_8dbd705b297944f38caf4982f4357991 = L.marker(
                [42.91861796043725, -78.89803432878706], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_810106cc93d44ebf8d2029a19a729e8d = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_8dbd705b297944f38caf4982f4357991.setIcon(icon_810106cc93d44ebf8d2029a19a729e8d);


        var popup_b04cfaeb073943bca6a235be861307d0 = L.popup({
            maxWidth: '300'
        });


        var html_2861a79ee16d469290452d94bc1b1fa1 = $('<div id="html_2861a79ee16d469290452d94bc1b1fa1" style="width: 100.0%; height: 100.0%;">Address 67 AUBURN, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_b04cfaeb073943bca6a235be861307d0.setContent(html_2861a79ee16d469290452d94bc1b1fa1);


        marker_8dbd705b297944f38caf4982f4357991.bindPopup(popup_b04cfaeb073943bca6a235be861307d0);





        var marker_1f37a7e5062c42e0a59e704f6f027a48 = L.marker(
                [42.923476089328595, -78.89247915344166], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_ee1c2226511846a38ccea7d798ea0896 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_1f37a7e5062c42e0a59e704f6f027a48.setIcon(icon_ee1c2226511846a38ccea7d798ea0896);


        var popup_246271abaa474bccb6ecc63a8bffa0d1 = L.popup({
            maxWidth: '300'
        });


        var html_1c38e5bd30044f569710f9d4ae9e9140 = $('<div id="html_1c38e5bd30044f569710f9d4ae9e9140" style="width: 100.0%; height: 100.0%;">Address 392 HERKIMER, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_246271abaa474bccb6ecc63a8bffa0d1.setContent(html_1c38e5bd30044f569710f9d4ae9e9140);


        marker_1f37a7e5062c42e0a59e704f6f027a48.bindPopup(popup_246271abaa474bccb6ecc63a8bffa0d1);





        var marker_914549e24f704e7f9aba55ef9fa9feaa = L.marker(
                [42.923933661932566, -78.8925395700173], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_0f1527198c254e6299c56ba75516c780 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_914549e24f704e7f9aba55ef9fa9feaa.setIcon(icon_0f1527198c254e6299c56ba75516c780);


        var popup_b553609dcd46418bafb45aee12268024 = L.popup({
            maxWidth: '300'
        });


        var html_5bc70d6953a34bfeaf0a3de9816f276d = $('<div id="html_5bc70d6953a34bfeaf0a3de9816f276d" style="width: 100.0%; height: 100.0%;">Address 185 POTOMAC, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_b553609dcd46418bafb45aee12268024.setContent(html_5bc70d6953a34bfeaf0a3de9816f276d);


        marker_914549e24f704e7f9aba55ef9fa9feaa.bindPopup(popup_b553609dcd46418bafb45aee12268024);





        var marker_126873d769954d55a392a3f3e331f72b = L.marker(
                [42.92205484363424, -78.88477020627029], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_eb38fc2c3773428981aa7c635b508ec9 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_126873d769954d55a392a3f3e331f72b.setIcon(icon_eb38fc2c3773428981aa7c635b508ec9);


        var popup_121c273330e2425890cbb5becd9446e3 = L.popup({
            maxWidth: '300'
        });


        var html_fa805a56d7bb453a96b04e178fa6b7c6 = $('<div id="html_fa805a56d7bb453a96b04e178fa6b7c6" style="width: 100.0%; height: 100.0%;">Address 395 DELAVAN WEST, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_121c273330e2425890cbb5becd9446e3.setContent(html_fa805a56d7bb453a96b04e178fa6b7c6);


        marker_126873d769954d55a392a3f3e331f72b.bindPopup(popup_121c273330e2425890cbb5becd9446e3);





        var marker_df60627198884a2294a14b342fb59d83 = L.marker(
                [42.9120334106121, -78.8894505735463], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_a65ef7821b81465aa5ed87af931699aa = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_df60627198884a2294a14b342fb59d83.setIcon(icon_a65ef7821b81465aa5ed87af931699aa);


        var popup_77f3b8392d0d40d7a16ebe2be6931882 = L.popup({
            maxWidth: '300'
        });


        var html_9d46956b2509435ea3a2b57ea3f0156e = $('<div id="html_9d46956b2509435ea3a2b57ea3f0156e" style="width: 100.0%; height: 100.0%;">Address 336 MASSACHUSETTS, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_77f3b8392d0d40d7a16ebe2be6931882.setContent(html_9d46956b2509435ea3a2b57ea3f0156e);


        marker_df60627198884a2294a14b342fb59d83.bindPopup(popup_77f3b8392d0d40d7a16ebe2be6931882);





        var marker_33779c89acc54de298c6631cc416d36d = L.marker(
                [42.911279816786134, -78.88865668800449], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_cc7f8f15360c4fa1ba7cef828c46120a = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_33779c89acc54de298c6631cc416d36d.setIcon(icon_cc7f8f15360c4fa1ba7cef828c46120a);


        var popup_2da09f7a573b40e7a709dabca4bb5d6e = L.popup({
            maxWidth: '300'
        });


        var html_9763c7da22ec4720b8e438fe1853999d = $('<div id="html_9763c7da22ec4720b8e438fe1853999d" style="width: 100.0%; height: 100.0%;">Address 590 UTICA WEST, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_2da09f7a573b40e7a709dabca4bb5d6e.setContent(html_9763c7da22ec4720b8e438fe1853999d);


        marker_33779c89acc54de298c6631cc416d36d.bindPopup(popup_2da09f7a573b40e7a709dabca4bb5d6e);





        var marker_452537b8677949afa780e984167ad695 = L.marker(
                [42.910294612346526, -78.88339394355782], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_79d80fbf1aaf42b58fb152e84237690b = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_452537b8677949afa780e984167ad695.setIcon(icon_79d80fbf1aaf42b58fb152e84237690b);


        var popup_28afe116aa264b2c9a53f5ce45f59024 = L.popup({
            maxWidth: '300'
        });


        var html_2c45aef2662545caac4ad24242400de2 = $('<div id="html_2c45aef2662545caac4ad24242400de2" style="width: 100.0%; height: 100.0%;">Address 445 VERMONT, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_28afe116aa264b2c9a53f5ce45f59024.setContent(html_2c45aef2662545caac4ad24242400de2);


        marker_452537b8677949afa780e984167ad695.bindPopup(popup_28afe116aa264b2c9a53f5ce45f59024);





        var marker_c1f379cf921a435099858c5f361927d5 = L.marker(
                [42.9119451808506, -78.89568605713309], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_94e6c114fa1449c78a104bce9ec28bf1 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_c1f379cf921a435099858c5f361927d5.setIcon(icon_94e6c114fa1449c78a104bce9ec28bf1);


        var popup_56212670db9340e99384ecb95a61af10 = L.popup({
            maxWidth: '300'
        });


        var html_7e8fca91a53f429782f3df099b95f78a = $('<div id="html_7e8fca91a53f429782f3df099b95f78a" style="width: 100.0%; height: 100.0%;">Address 568 PLYMOUTH, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_56212670db9340e99384ecb95a61af10.setContent(html_7e8fca91a53f429782f3df099b95f78a);


        marker_c1f379cf921a435099858c5f361927d5.bindPopup(popup_56212670db9340e99384ecb95a61af10);





        var marker_60804c7de88c4718a8776e6e7c9df3c2 = L.marker(
                [42.91602232828856, -78.88751811926538], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_040dac7c3fd7492f9f8dcb7f400d5c34);



        var icon_8e195c90034642459be8258987802b05 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'blue',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_60804c7de88c4718a8776e6e7c9df3c2.setIcon(icon_8e195c90034642459be8258987802b05);


        var popup_ffc20499e64d484ba2f4d559d1bc37ae = L.popup({
            maxWidth: '300'
        });


        var html_eabe0f2a88714f4d8d50b6266a01f15d = $('<div id="html_eabe0f2a88714f4d8d50b6266a01f15d" style="width: 100.0%; height: 100.0%;">Address 81 ARNOLD, Property Class  TWO FAMILY DWELLING</div>')[0];
        popup_ffc20499e64d484ba2f4d559d1bc37ae.setContent(html_eabe0f2a88714f4d8d50b6266a01f15d);


        marker_60804c7de88c4718a8776e6e7c9df3c2.bindPopup(popup_ffc20499e64d484ba2f4d559d1bc37ae);




        var feature_group_f7f7cbfc31c444479da15991f70c7583 = L.featureGroup().addTo(map_4f5f9d848005489ba785ca362be66ab5);



        var marker_2b54a70192aa4b0db0d757b8457dc479 = L.marker(
                [42.915374639708574, -78.88426247132199], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_f7f7cbfc31c444479da15991f70c7583);



        var icon_3866c26af4e540b795a19ed803d70637 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'purple',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_2b54a70192aa4b0db0d757b8457dc479.setIcon(icon_3866c26af4e540b795a19ed803d70637);


        var popup_a60172d345fe46bea1784d66241e38f6 = L.popup({
            maxWidth: '300'
        });


        var html_680cbcbf619b4d6e8b7c56eb6ac9861d = $('<div id="html_680cbcbf619b4d6e8b7c56eb6ac9861d" style="width: 100.0%; height: 100.0%;">Address 471 FERRY WEST, Property Class  ONE FAMILY DWELLING</div>')[0];
        popup_a60172d345fe46bea1784d66241e38f6.setContent(html_680cbcbf619b4d6e8b7c56eb6ac9861d);


        marker_2b54a70192aa4b0db0d757b8457dc479.bindPopup(popup_a60172d345fe46bea1784d66241e38f6);





        var marker_231391973ebf4cd88cbd204e416e48d7 = L.marker(
                [42.92494910925614, -78.8940842359168], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_f7f7cbfc31c444479da15991f70c7583);



        var icon_88ae1b0ed20e43d0a780290e0ecc7e21 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'purple',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_231391973ebf4cd88cbd204e416e48d7.setIcon(icon_88ae1b0ed20e43d0a780290e0ecc7e21);


        var popup_7cdd30cf8de74c7fbab9da4cd5f8920e = L.popup({
            maxWidth: '300'
        });


        var html_a0125341180e487cbb4081b085baa698 = $('<div id="html_a0125341180e487cbb4081b085baa698" style="width: 100.0%; height: 100.0%;">Address 16 GARNER, Property Class  ONE FAMILY DWELLING</div>')[0];
        popup_7cdd30cf8de74c7fbab9da4cd5f8920e.setContent(html_a0125341180e487cbb4081b085baa698);


        marker_231391973ebf4cd88cbd204e416e48d7.bindPopup(popup_7cdd30cf8de74c7fbab9da4cd5f8920e);





        var marker_5a29144696954521ad145391d6f7d3d5 = L.marker(
                [42.92671790910715, -78.89210571861426], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_f7f7cbfc31c444479da15991f70c7583);



        var icon_822590edf7f84cf1abbf277b05c24292 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'purple',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_5a29144696954521ad145391d6f7d3d5.setIcon(icon_822590edf7f84cf1abbf277b05c24292);


        var popup_b20ed832bfe846d8b35c47c7e8c0f47b = L.popup({
            maxWidth: '300'
        });


        var html_7179f9ba32c74dffb19425ed82de368c = $('<div id="html_7179f9ba32c74dffb19425ed82de368c" style="width: 100.0%; height: 100.0%;">Address 71 POOLEY, Property Class  ONE FAMILY DWELLING</div>')[0];
        popup_b20ed832bfe846d8b35c47c7e8c0f47b.setContent(html_7179f9ba32c74dffb19425ed82de368c);


        marker_5a29144696954521ad145391d6f7d3d5.bindPopup(popup_b20ed832bfe846d8b35c47c7e8c0f47b);





        var marker_0fdb82acc9474edbb28e3b8bc39ece1d = L.marker(
                [42.92400967287078, -78.8946706608567], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_f7f7cbfc31c444479da15991f70c7583);



        var icon_c1acb26bb6234572ba4a30ddfe3413e4 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'purple',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_0fdb82acc9474edbb28e3b8bc39ece1d.setIcon(icon_c1acb26bb6234572ba4a30ddfe3413e4);


        var popup_438aa39d9ba64427864b7227ca591ecf = L.popup({
            maxWidth: '300'
        });


        var html_356f620e198a4181bd8ad00a4e5405de = $('<div id="html_356f620e198a4181bd8ad00a4e5405de" style="width: 100.0%; height: 100.0%;">Address 120 POTOMAC, Property Class  ONE FAMILY DWELLING</div>')[0];
        popup_438aa39d9ba64427864b7227ca591ecf.setContent(html_356f620e198a4181bd8ad00a4e5405de);


        marker_0fdb82acc9474edbb28e3b8bc39ece1d.bindPopup(popup_438aa39d9ba64427864b7227ca591ecf);





        var marker_42e9b2dc11ea43a595cf2cf9898d9674 = L.marker(
                [42.921382399983955, -78.8876919632133], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_f7f7cbfc31c444479da15991f70c7583);



        var icon_a1239939d6a642de8696f4fd1cebf063 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'purple',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_42e9b2dc11ea43a595cf2cf9898d9674.setIcon(icon_a1239939d6a642de8696f4fd1cebf063);


        var popup_4a3e8ac9b8b64053b139deca925bb6ca = L.popup({
            maxWidth: '300'
        });


        var html_c2c16c1aa4ba4e74b6e2ed3ec5845108 = $('<div id="html_c2c16c1aa4ba4e74b6e2ed3ec5845108" style="width: 100.0%; height: 100.0%;">Address 217 PARKDALE, Property Class  ONE FAMILY DWELLING</div>')[0];
        popup_4a3e8ac9b8b64053b139deca925bb6ca.setContent(html_c2c16c1aa4ba4e74b6e2ed3ec5845108);


        marker_42e9b2dc11ea43a595cf2cf9898d9674.bindPopup(popup_4a3e8ac9b8b64053b139deca925bb6ca);





        var marker_9012db567b7d40e8a4b9ec35ca450f23 = L.marker(
                [42.92445548291988, -78.88727372696567], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_f7f7cbfc31c444479da15991f70c7583);



        var icon_15a3d40511614b338886575e3c1ad339 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'purple',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_9012db567b7d40e8a4b9ec35ca450f23.setIcon(icon_15a3d40511614b338886575e3c1ad339);


        var popup_f2ee4d4220134297b768f3fa50881b9e = L.popup({
            maxWidth: '300'
        });


        var html_422aa0da7c524bbdb061ad7e4973e44b = $('<div id="html_422aa0da7c524bbdb061ad7e4973e44b" style="width: 100.0%; height: 100.0%;">Address 333 PARKDALE, Property Class  ONE FAMILY DWELLING</div>')[0];
        popup_f2ee4d4220134297b768f3fa50881b9e.setContent(html_422aa0da7c524bbdb061ad7e4973e44b);


        marker_9012db567b7d40e8a4b9ec35ca450f23.bindPopup(popup_f2ee4d4220134297b768f3fa50881b9e);





        var marker_ae711f7bb9074b47b526ea260bda76a7 = L.marker(
                [42.925516736996585, -78.88590792610026], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_f7f7cbfc31c444479da15991f70c7583);



        var icon_a9d4e6321c794fa7a80f6e645a0441e2 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'purple',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_ae711f7bb9074b47b526ea260bda76a7.setIcon(icon_a9d4e6321c794fa7a80f6e645a0441e2);


        var popup_dbd2282b0c05482484e4a53bbfb9f7b7 = L.popup({
            maxWidth: '300'
        });


        var html_919c87adf9da4930b174986700770acb = $('<div id="html_919c87adf9da4930b174986700770acb" style="width: 100.0%; height: 100.0%;">Address 359 HOYT, Property Class  ONE FAMILY DWELLING</div>')[0];
        popup_dbd2282b0c05482484e4a53bbfb9f7b7.setContent(html_919c87adf9da4930b174986700770acb);


        marker_ae711f7bb9074b47b526ea260bda76a7.bindPopup(popup_dbd2282b0c05482484e4a53bbfb9f7b7);





        var marker_679813e5613a4ce48e8c55a8660601a6 = L.marker(
                [42.925699043021005, -78.88588769677186], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_f7f7cbfc31c444479da15991f70c7583);



        var icon_f18b05d1149b4b3fb42723cb71619615 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'purple',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_679813e5613a4ce48e8c55a8660601a6.setIcon(icon_f18b05d1149b4b3fb42723cb71619615);


        var popup_2c455aa03491412e80273028268fc10a = L.popup({
            maxWidth: '300'
        });


        var html_f1506c704cb84b4da5a70a8a66c0347f = $('<div id="html_f1506c704cb84b4da5a70a8a66c0347f" style="width: 100.0%; height: 100.0%;">Address 365 HOYT, Property Class  ONE FAMILY DWELLING</div>')[0];
        popup_2c455aa03491412e80273028268fc10a.setContent(html_f1506c704cb84b4da5a70a8a66c0347f);


        marker_679813e5613a4ce48e8c55a8660601a6.bindPopup(popup_2c455aa03491412e80273028268fc10a);




        var feature_group_1be39076377a49e896acf8e1cbcad4f2 = L.featureGroup().addTo(map_4f5f9d848005489ba785ca362be66ab5);



        var marker_03cd73e4aa5842a48c4526358bf1b0fb = L.marker(
                [42.9074989816381, -78.8877560804126], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_1be39076377a49e896acf8e1cbcad4f2);



        var icon_55d7893426ed4c6a963ce0a44768015a = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'orange',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_03cd73e4aa5842a48c4526358bf1b0fb.setIcon(icon_55d7893426ed4c6a963ce0a44768015a);


        var popup_3881cd0429a94a0c9d4467e3c0a91f41 = L.popup({
            maxWidth: '300'
        });


        var html_b6220a42ad9a42d69a89658027a5d0c5 = $('<div id="html_b6220a42ad9a42d69a89658027a5d0c5" style="width: 100.0%; height: 100.0%;">Address 251 FOURTEENTH, Property Class  RESIDENTIAL LAND WITH SMALL IMPROVEMENTS</div>')[0];
        popup_3881cd0429a94a0c9d4467e3c0a91f41.setContent(html_b6220a42ad9a42d69a89658027a5d0c5);


        marker_03cd73e4aa5842a48c4526358bf1b0fb.bindPopup(popup_3881cd0429a94a0c9d4467e3c0a91f41);




        var feature_group_2944f3d438874f9dbb03bc72e070f156 = L.featureGroup().addTo(map_4f5f9d848005489ba785ca362be66ab5);



        var marker_649ec8b736a14820b59fed75e95c3ec5 = L.marker(
                [42.91495078959036, -78.88805354188239], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_2944f3d438874f9dbb03bc72e070f156);



        var icon_95c7fd936dc844e1b473bdc118b33385 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'darkred',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_649ec8b736a14820b59fed75e95c3ec5.setIcon(icon_95c7fd936dc844e1b473bdc118b33385);


        var popup_48a6257309da42b999187d213bcda180 = L.popup({
            maxWidth: '300'
        });


        var html_99c8236f11534d9db6251bc66efb4c26 = $('<div id="html_99c8236f11534d9db6251bc66efb4c26" style="width: 100.0%; height: 100.0%;">Address 399 HAMPSHIRE, Property Class  RESIDENTIAL VACANT LAND</div>')[0];
        popup_48a6257309da42b999187d213bcda180.setContent(html_99c8236f11534d9db6251bc66efb4c26);


        marker_649ec8b736a14820b59fed75e95c3ec5.bindPopup(popup_48a6257309da42b999187d213bcda180);





        var marker_07d001e183cb442d9b20a5d2f6816cce = L.marker(
                [42.921979989533845, -78.89091726082516], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_2944f3d438874f9dbb03bc72e070f156);



        var icon_93eaea9bdb2a493b95a7b05053dcc2b8 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'darkred',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_07d001e183cb442d9b20a5d2f6816cce.setIcon(icon_93eaea9bdb2a493b95a7b05053dcc2b8);


        var popup_96bed42318e942bdb9f51ddc8244dbaa = L.popup({
            maxWidth: '300'
        });


        var html_3fd7a470c58c47999bc3dfb856e3d556 = $('<div id="html_3fd7a470c58c47999bc3dfb856e3d556" style="width: 100.0%; height: 100.0%;">Address 231 DELAVAN WEST, Property Class  RESIDENTIAL VACANT LAND</div>')[0];
        popup_96bed42318e942bdb9f51ddc8244dbaa.setContent(html_3fd7a470c58c47999bc3dfb856e3d556);


        marker_07d001e183cb442d9b20a5d2f6816cce.bindPopup(popup_96bed42318e942bdb9f51ddc8244dbaa);





        var marker_83114a5be12f42a4b55c1ed290383ffb = L.marker(
                [42.928796771654774, -78.8905539615947], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_2944f3d438874f9dbb03bc72e070f156);



        var icon_2abd69b3b70444559e94f04ba1531034 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'darkred',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_83114a5be12f42a4b55c1ed290383ffb.setIcon(icon_2abd69b3b70444559e94f04ba1531034);


        var popup_be6874fc4234430785892f6fc829d918 = L.popup({
            maxWidth: '300'
        });


        var html_35b933fe27434f1b974cafc8532b5c13 = $('<div id="html_35b933fe27434f1b974cafc8532b5c13" style="width: 100.0%; height: 100.0%;">Address 38 HAWLEY, Property Class  RESIDENTIAL VACANT LAND</div>')[0];
        popup_be6874fc4234430785892f6fc829d918.setContent(html_35b933fe27434f1b974cafc8532b5c13);


        marker_83114a5be12f42a4b55c1ed290383ffb.bindPopup(popup_be6874fc4234430785892f6fc829d918);





        var marker_4bd8506d373842ada921bbafa69bc595 = L.marker(
                [42.92292460401021, -78.89420005504098], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_2944f3d438874f9dbb03bc72e070f156);



        var icon_608f6c38c8144ef784f6f4143192a911 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'darkred',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_4bd8506d373842ada921bbafa69bc595.setIcon(icon_608f6c38c8144ef784f6f4143192a911);


        var popup_c44e37eaefbb4c4db5437a7b10e22f3a = L.popup({
            maxWidth: '300'
        });


        var html_74a2df1cb26840f9a09b9cde0e24aeee = $('<div id="html_74a2df1cb26840f9a09b9cde0e24aeee" style="width: 100.0%; height: 100.0%;">Address 29 PERKINS, Property Class  RESIDENTIAL VACANT LAND</div>')[0];
        popup_c44e37eaefbb4c4db5437a7b10e22f3a.setContent(html_74a2df1cb26840f9a09b9cde0e24aeee);


        marker_4bd8506d373842ada921bbafa69bc595.bindPopup(popup_c44e37eaefbb4c4db5437a7b10e22f3a);





        var marker_6bbfd632fe5541969423f7fd1b7f925e = L.marker(
                [42.91900293468723, -78.89701445352321], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_2944f3d438874f9dbb03bc72e070f156);



        var icon_9e1f94e32bfa49079fdca96e3a10bfea = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'darkred',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_6bbfd632fe5541969423f7fd1b7f925e.setIcon(icon_9e1f94e32bfa49079fdca96e3a10bfea);


        var popup_82eff132fa4d4b67a17654b68d586297 = L.popup({
            maxWidth: '300'
        });


        var html_eba1b928c3fb43c7a67c569408666ff4 = $('<div id="html_eba1b928c3fb43c7a67c569408666ff4" style="width: 100.0%; height: 100.0%;">Address 1056 WEST, Property Class  RESIDENTIAL VACANT LAND</div>')[0];
        popup_82eff132fa4d4b67a17654b68d586297.setContent(html_eba1b928c3fb43c7a67c569408666ff4);


        marker_6bbfd632fe5541969423f7fd1b7f925e.bindPopup(popup_82eff132fa4d4b67a17654b68d586297);





        var marker_48794445f57642779cac633506f20e82 = L.marker(
                [42.906431241343604, -78.89101623390302], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_2944f3d438874f9dbb03bc72e070f156);



        var icon_dc5744b01bee457b8e23393c192b4176 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'darkred',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_48794445f57642779cac633506f20e82.setIcon(icon_dc5744b01bee457b8e23393c192b4176);


        var popup_b6bd43aa6003494da0d9c01357791437 = L.popup({
            maxWidth: '300'
        });


        var html_a658f89177744006b5bb46727cffce7e = $('<div id="html_a658f89177744006b5bb46727cffce7e" style="width: 100.0%; height: 100.0%;">Address 199 VERMONT, Property Class  RESIDENTIAL VACANT LAND</div>')[0];
        popup_b6bd43aa6003494da0d9c01357791437.setContent(html_a658f89177744006b5bb46727cffce7e);


        marker_48794445f57642779cac633506f20e82.bindPopup(popup_b6bd43aa6003494da0d9c01357791437);




        var feature_group_515934f4d01646dc94260495072f2092 = L.featureGroup().addTo(map_4f5f9d848005489ba785ca362be66ab5);



        var marker_73d0da94a23f4e008483b98274cf7b18 = L.marker(
                [42.910900806752785, -78.89948550571556], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_515934f4d01646dc94260495072f2092);



        var icon_2aca3f300e61455293307ca8a6166ba1 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'lightred',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_73d0da94a23f4e008483b98274cf7b18.setIcon(icon_2aca3f300e61455293307ca8a6166ba1);


        var popup_03fe0df43fde4311842ca36b9a30c372 = L.popup({
            maxWidth: '300'
        });


        var html_b0108afd7a7843e7ba179908416211fe = $('<div id="html_b0108afd7a7843e7ba179908416211fe" style="width: 100.0%; height: 100.0%;">Address 949 PROSPECT, Property Class  COMMERCIAL VACANT LAND</div>')[0];
        popup_03fe0df43fde4311842ca36b9a30c372.setContent(html_b0108afd7a7843e7ba179908416211fe);


        marker_73d0da94a23f4e008483b98274cf7b18.bindPopup(popup_03fe0df43fde4311842ca36b9a30c372);




        var feature_group_546f297b078747d5a4b8ebbc0b8defa4 = L.featureGroup().addTo(map_4f5f9d848005489ba785ca362be66ab5);



        var marker_bdadcbc223eb4d42826621a0489428e4 = L.marker(
                [42.92212334741801, -78.89142871122729], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_af030331ef3b42818ef871111d853fa7 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_bdadcbc223eb4d42826621a0489428e4.setIcon(icon_af030331ef3b42818ef871111d853fa7);


        var popup_1e52d76826914606baa059d98f69245f = L.popup({
            maxWidth: '300'
        });


        var html_e3d506c139454583891a320dc95ae253 = $('<div id="html_e3d506c139454583891a320dc95ae253" style="width: 100.0%; height: 100.0%;">Address 160 CONGRESS, Property Class 330</div>')[0];
        popup_1e52d76826914606baa059d98f69245f.setContent(html_e3d506c139454583891a320dc95ae253);


        marker_bdadcbc223eb4d42826621a0489428e4.bindPopup(popup_1e52d76826914606baa059d98f69245f);





        var marker_930bf0ed7bba4288aeb5c08e5a86a12c = L.marker(
                [42.92200126681464, -78.88956222187525], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_2f0d4cd279ff465cab65b6d60105ce02 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_930bf0ed7bba4288aeb5c08e5a86a12c.setIcon(icon_2f0d4cd279ff465cab65b6d60105ce02);


        var popup_ffccfd05f78348cf8866c9dcdc215a26 = L.popup({
            maxWidth: '300'
        });


        var html_c7ad1fb78dbf42d1b016ab1ec0a408ca = $('<div id="html_c7ad1fb78dbf42d1b016ab1ec0a408ca" style="width: 100.0%; height: 100.0%;">Address 265 DELAVAN WEST, Property Class 311</div>')[0];
        popup_ffccfd05f78348cf8866c9dcdc215a26.setContent(html_c7ad1fb78dbf42d1b016ab1ec0a408ca);


        marker_930bf0ed7bba4288aeb5c08e5a86a12c.bindPopup(popup_ffccfd05f78348cf8866c9dcdc215a26);





        var marker_86e123bee1df4185b776dbcb278e7b63 = L.marker(
                [42.92196488134693, -78.89214636139906], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_2beb8822c4d541758e63160f42235b99 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_86e123bee1df4185b776dbcb278e7b63.setIcon(icon_2beb8822c4d541758e63160f42235b99);


        var popup_93d21ec07eb64b3c8d03aa063ac784c8 = L.popup({
            maxWidth: '300'
        });


        var html_0b5901d84b8a49fe93ee465b3532d208 = $('<div id="html_0b5901d84b8a49fe93ee465b3532d208" style="width: 100.0%; height: 100.0%;">Address 199 DELAVAN WEST, Property Class 220</div>')[0];
        popup_93d21ec07eb64b3c8d03aa063ac784c8.setContent(html_0b5901d84b8a49fe93ee465b3532d208);


        marker_86e123bee1df4185b776dbcb278e7b63.bindPopup(popup_93d21ec07eb64b3c8d03aa063ac784c8);





        var marker_a5670d1cebbe4e90a169d572039ca94c = L.marker(
                [42.917569963365715, -78.89303465240198], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_030170174f9b4513b6e832ca2a9c9b2f = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_a5670d1cebbe4e90a169d572039ca94c.setIcon(icon_030170174f9b4513b6e832ca2a9c9b2f);


        var popup_ff168ec22dd8447cad3bcb408d71e9cf = L.popup({
            maxWidth: '300'
        });


        var html_62110f5dd69842778d99d762dabae3ed = $('<div id="html_62110f5dd69842778d99d762dabae3ed" style="width: 100.0%; height: 100.0%;">Address 176 HERKIMER, Property Class 311</div>')[0];
        popup_ff168ec22dd8447cad3bcb408d71e9cf.setContent(html_62110f5dd69842778d99d762dabae3ed);


        marker_a5670d1cebbe4e90a169d572039ca94c.bindPopup(popup_ff168ec22dd8447cad3bcb408d71e9cf);





        var marker_f31388872ad643e9b995d530fc1b161d = L.marker(
                [42.917512267689844, -78.8930415224875], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_4a675573392742f4b4dd2d25c2c62d28 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_f31388872ad643e9b995d530fc1b161d.setIcon(icon_4a675573392742f4b4dd2d25c2c62d28);


        var popup_76bf429cd6ab442aaefef87787b57e9a = L.popup({
            maxWidth: '300'
        });


        var html_89c52445929144b3a81b9f01ca54c543 = $('<div id="html_89c52445929144b3a81b9f01ca54c543" style="width: 100.0%; height: 100.0%;">Address 174 HERKIMER, Property Class 311</div>')[0];
        popup_76bf429cd6ab442aaefef87787b57e9a.setContent(html_89c52445929144b3a81b9f01ca54c543);


        marker_f31388872ad643e9b995d530fc1b161d.bindPopup(popup_76bf429cd6ab442aaefef87787b57e9a);





        var marker_cb7415a694a74a35bcf3c6a96d61d0e9 = L.marker(
                [42.9163730198483, -78.88811886563137], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_94842ddc3431413bbbb61aaf33345ef5 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_cb7415a694a74a35bcf3c6a96d61d0e9.setIcon(icon_94842ddc3431413bbbb61aaf33345ef5);


        var popup_f2276d9a1a6440da8cbbc77f655975a6 = L.popup({
            maxWidth: '300'
        });


        var html_52371d46aa034abc8c5b313b783b210a = $('<div id="html_52371d46aa034abc8c5b313b783b210a" style="width: 100.0%; height: 100.0%;">Address 33 PARKDALE, Property Class 220</div>')[0];
        popup_f2276d9a1a6440da8cbbc77f655975a6.setContent(html_52371d46aa034abc8c5b313b783b210a);


        marker_cb7415a694a74a35bcf3c6a96d61d0e9.bindPopup(popup_f2276d9a1a6440da8cbbc77f655975a6);





        var marker_9b18773dd5284e07836c397a3f46369e = L.marker(
                [42.91394305499618, -78.8871050358977], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_d83d8e96023245dbb7ac8441321274d8 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_9b18773dd5284e07836c397a3f46369e.setIcon(icon_d83d8e96023245dbb7ac8441321274d8);


        var popup_78f19dd361ec4a8d8a0a0f795e2929ce = L.popup({
            maxWidth: '300'
        });


        var html_3aca3b60fee84bf1ae89d56e5cf256c8 = $('<div id="html_3aca3b60fee84bf1ae89d56e5cf256c8" style="width: 100.0%; height: 100.0%;">Address 111 EIGHTEENTH, Property Class 311</div>')[0];
        popup_78f19dd361ec4a8d8a0a0f795e2929ce.setContent(html_3aca3b60fee84bf1ae89d56e5cf256c8);


        marker_9b18773dd5284e07836c397a3f46369e.bindPopup(popup_78f19dd361ec4a8d8a0a0f795e2929ce);





        var marker_dc3c57db031a4f7ca986cc9f821a9d34 = L.marker(
                [42.914080321800775, -78.88723362242564], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_b6f51e9038d3412e9c023736347d9371 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_dc3c57db031a4f7ca986cc9f821a9d34.setIcon(icon_b6f51e9038d3412e9c023736347d9371);


        var popup_36c87c3a4631485687a54dce69563312 = L.popup({
            maxWidth: '300'
        });


        var html_f2d07628493d4429bbe21b45e4d24fa1 = $('<div id="html_f2d07628493d4429bbe21b45e4d24fa1" style="width: 100.0%; height: 100.0%;">Address 123 EIGHTEENTH, Property Class 311</div>')[0];
        popup_36c87c3a4631485687a54dce69563312.setContent(html_f2d07628493d4429bbe21b45e4d24fa1);


        marker_dc3c57db031a4f7ca986cc9f821a9d34.bindPopup(popup_36c87c3a4631485687a54dce69563312);





        var marker_effc75b3bfbf49e2aea1286b1a225d12 = L.marker(
                [42.9144025944037, -78.88516434379059], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_25880332229c46f8bc27b47d603751d2 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_effc75b3bfbf49e2aea1286b1a225d12.setIcon(icon_25880332229c46f8bc27b47d603751d2);


        var popup_12ac0c5052644cf2a3cf539b7f787df5 = L.popup({
            maxWidth: '300'
        });


        var html_fa1d622e9b624d618f3fb650aa757cf5 = $('<div id="html_fa1d622e9b624d618f3fb650aa757cf5" style="width: 100.0%; height: 100.0%;">Address 129 CHENANGO, Property Class 230</div>')[0];
        popup_12ac0c5052644cf2a3cf539b7f787df5.setContent(html_fa1d622e9b624d618f3fb650aa757cf5);


        marker_effc75b3bfbf49e2aea1286b1a225d12.bindPopup(popup_12ac0c5052644cf2a3cf539b7f787df5);





        var marker_9b0d317bec3e4738aa8888fb05f12eb5 = L.marker(
                [42.914456912284216, -78.88521528458837], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_8b581f4fa3b24d3a8731f74cf23d0b13 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_9b0d317bec3e4738aa8888fb05f12eb5.setIcon(icon_8b581f4fa3b24d3a8731f74cf23d0b13);


        var popup_834e7c3242974945a38c513528e2a0b5 = L.popup({
            maxWidth: '300'
        });


        var html_c2797f788ce94fbc9e3da1cc82341e34 = $('<div id="html_c2797f788ce94fbc9e3da1cc82341e34" style="width: 100.0%; height: 100.0%;">Address 133 CHENANGO, Property Class 312</div>')[0];
        popup_834e7c3242974945a38c513528e2a0b5.setContent(html_c2797f788ce94fbc9e3da1cc82341e34);


        marker_9b0d317bec3e4738aa8888fb05f12eb5.bindPopup(popup_834e7c3242974945a38c513528e2a0b5);





        var marker_1c24fc25f2444d9baacd93e481a68231 = L.marker(
                [42.91535095710048, -78.8851884573973], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_60dccbc3b8ac44cda47c41dca78a9ec7 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_1c24fc25f2444d9baacd93e481a68231.setIcon(icon_60dccbc3b8ac44cda47c41dca78a9ec7);


        var popup_c5811b881fba4e86b1edfa209008bc7a = L.popup({
            maxWidth: '300'
        });


        var html_a8cbfc5bf6eb47e08890c8812a305618 = $('<div id="html_a8cbfc5bf6eb47e08890c8812a305618" style="width: 100.0%; height: 100.0%;">Address 445 FERRY WEST, Property Class 311</div>')[0];
        popup_c5811b881fba4e86b1edfa209008bc7a.setContent(html_a8cbfc5bf6eb47e08890c8812a305618);


        marker_1c24fc25f2444d9baacd93e481a68231.bindPopup(popup_c5811b881fba4e86b1edfa209008bc7a);





        var marker_be689a3b2d354b70bfe6c15cf63d5916 = L.marker(
                [42.91396692570832, -78.88565330894862], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_26abe454318640e690c57de7ee99b311 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_be689a3b2d354b70bfe6c15cf63d5916.setIcon(icon_26abe454318640e690c57de7ee99b311);


        var popup_c38c5d14f70d47c5801274a0244e511d = L.popup({
            maxWidth: '300'
        });


        var html_c8477fe1e84242b29ca06ab8964873fd = $('<div id="html_c8477fe1e84242b29ca06ab8964873fd" style="width: 100.0%; height: 100.0%;">Address 460 MASSACHUSETTS, Property Class 411</div>')[0];
        popup_c38c5d14f70d47c5801274a0244e511d.setContent(html_c8477fe1e84242b29ca06ab8964873fd);


        marker_be689a3b2d354b70bfe6c15cf63d5916.bindPopup(popup_c38c5d14f70d47c5801274a0244e511d);





        var marker_f9b1d2717cd44daaacfd12ccd8408be3 = L.marker(
                [42.91390764140094, -78.88576901128872], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_7f95770c28504447986ea092c9a9bce3 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_f9b1d2717cd44daaacfd12ccd8408be3.setIcon(icon_7f95770c28504447986ea092c9a9bce3);


        var popup_2502dff3f42245b28767b6df1082b48a = L.popup({
            maxWidth: '300'
        });


        var html_6a711a3f4db04b219f60b2aaa3feea1e = $('<div id="html_6a711a3f4db04b219f60b2aaa3feea1e" style="width: 100.0%; height: 100.0%;">Address 456 MASSACHUSETTS, Property Class 230</div>')[0];
        popup_2502dff3f42245b28767b6df1082b48a.setContent(html_6a711a3f4db04b219f60b2aaa3feea1e);


        marker_f9b1d2717cd44daaacfd12ccd8408be3.bindPopup(popup_2502dff3f42245b28767b6df1082b48a);





        var marker_6f94c5d36e414a58a9e2aa7892604659 = L.marker(
                [42.91160472091443, -78.89485121958309], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_6bfd353bc57f48fba13693fb6fef8ed5 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_6f94c5d36e414a58a9e2aa7892604659.setIcon(icon_6bfd353bc57f48fba13693fb6fef8ed5);


        var popup_687bcdcce597423a86579b9d69fcd567 = L.popup({
            maxWidth: '300'
        });


        var html_5e07ddc6df504bafb55a5da4dfce7cdb = $('<div id="html_5e07ddc6df504bafb55a5da4dfce7cdb" style="width: 100.0%; height: 100.0%;">Address 174 HAMPSHIRE, Property Class 311</div>')[0];
        popup_687bcdcce597423a86579b9d69fcd567.setContent(html_5e07ddc6df504bafb55a5da4dfce7cdb);


        marker_6f94c5d36e414a58a9e2aa7892604659.bindPopup(popup_687bcdcce597423a86579b9d69fcd567);





        var marker_42080085f47b4451a1b2afec9e400355 = L.marker(
                [42.914073452235314, -78.89123467200689], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_6251126c76874176bdb5cde39759f2eb = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_42080085f47b4451a1b2afec9e400355.setIcon(icon_6251126c76874176bdb5cde39759f2eb);


        var popup_6d1643b8c715453ea1d10f99bdaae00e = L.popup({
            maxWidth: '300'
        });


        var html_0c9b242ec01542d9826869b58529d951 = $('<div id="html_0c9b242ec01542d9826869b58529d951" style="width: 100.0%; height: 100.0%;">Address 169 ARKANSAS, Property Class 210</div>')[0];
        popup_6d1643b8c715453ea1d10f99bdaae00e.setContent(html_0c9b242ec01542d9826869b58529d951);


        marker_42080085f47b4451a1b2afec9e400355.bindPopup(popup_6d1643b8c715453ea1d10f99bdaae00e);





        var marker_336c8b4474a54c65aa3901a448655f78 = L.marker(
                [42.91359590706253, -78.89095860008331], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_023a24f9c33942b7856b5febf60b6bbc = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_336c8b4474a54c65aa3901a448655f78.setIcon(icon_023a24f9c33942b7856b5febf60b6bbc);


        var popup_01321793291a496b81fa74f5ab6b643e = L.popup({
            maxWidth: '300'
        });


        var html_a214feff1b0240f2909a9a93595ec821 = $('<div id="html_a214feff1b0240f2909a9a93595ec821" style="width: 100.0%; height: 100.0%;">Address 298 HAMPSHIRE, Property Class 311</div>')[0];
        popup_01321793291a496b81fa74f5ab6b643e.setContent(html_a214feff1b0240f2909a9a93595ec821);


        marker_336c8b4474a54c65aa3901a448655f78.bindPopup(popup_01321793291a496b81fa74f5ab6b643e);





        var marker_10319c8791c64aae95559ae3d8819faa = L.marker(
                [42.91373336162157, -78.88802247648815], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_d3201ab8d2d04e59ac7ce424822abf8d = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_10319c8791c64aae95559ae3d8819faa.setIcon(icon_d3201ab8d2d04e59ac7ce424822abf8d);


        var popup_3968e1e6975b41f0b2d871e29d3fb95a = L.popup({
            maxWidth: '300'
        });


        var html_5c57daf1320b47da89bc52544c2b0526 = $('<div id="html_5c57daf1320b47da89bc52544c2b0526" style="width: 100.0%; height: 100.0%;">Address 44 WINTER, Property Class 311</div>')[0];
        popup_3968e1e6975b41f0b2d871e29d3fb95a.setContent(html_5c57daf1320b47da89bc52544c2b0526);


        marker_10319c8791c64aae95559ae3d8819faa.bindPopup(popup_3968e1e6975b41f0b2d871e29d3fb95a);





        var marker_1b13429dbd30404aa8a7ec4603db1e14 = L.marker(
                [42.91370231147784, -78.88799255061629], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_093ac5e7f4794fab8dda62c44ee3952d = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_1b13429dbd30404aa8a7ec4603db1e14.setIcon(icon_093ac5e7f4794fab8dda62c44ee3952d);


        var popup_345820ae606e4c52ad5b9dfab6c6603f = L.popup({
            maxWidth: '300'
        });


        var html_187132c871af430f8389630913b51118 = $('<div id="html_187132c871af430f8389630913b51118" style="width: 100.0%; height: 100.0%;">Address 42 WINTER, Property Class 311</div>')[0];
        popup_345820ae606e4c52ad5b9dfab6c6603f.setContent(html_187132c871af430f8389630913b51118);


        marker_1b13429dbd30404aa8a7ec4603db1e14.bindPopup(popup_345820ae606e4c52ad5b9dfab6c6603f);





        var marker_ce3d2b3ae3bb41dfabd861fe361831a0 = L.marker(
                [42.913671742836144, -78.88796288552933], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_485d4c2d2401462da8f06c4978e118c8 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_ce3d2b3ae3bb41dfabd861fe361831a0.setIcon(icon_485d4c2d2401462da8f06c4978e118c8);


        var popup_60aa4acebb324847ac13e08982a25d06 = L.popup({
            maxWidth: '300'
        });


        var html_295383d447fb46a19131a8086c10ab2a = $('<div id="html_295383d447fb46a19131a8086c10ab2a" style="width: 100.0%; height: 100.0%;">Address 40 WINTER, Property Class 311</div>')[0];
        popup_60aa4acebb324847ac13e08982a25d06.setContent(html_295383d447fb46a19131a8086c10ab2a);


        marker_ce3d2b3ae3bb41dfabd861fe361831a0.bindPopup(popup_60aa4acebb324847ac13e08982a25d06);





        var marker_c5b2ec52215342018afbbbbacb728ae9 = L.marker(
                [42.913304918516225, -78.88760690677618], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_882ca65b3bc64659ae3c384e02efd296 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_c5b2ec52215342018afbbbbacb728ae9.setIcon(icon_882ca65b3bc64659ae3c384e02efd296);


        var popup_169c1866fac64e0e91ed702c0cf2d08e = L.popup({
            maxWidth: '300'
        });


        var html_4dec2172f7b84e3c8ac94d6238df6e3c = $('<div id="html_4dec2172f7b84e3c8ac94d6238df6e3c" style="width: 100.0%; height: 100.0%;">Address 16 WINTER, Property Class 210</div>')[0];
        popup_169c1866fac64e0e91ed702c0cf2d08e.setContent(html_4dec2172f7b84e3c8ac94d6238df6e3c);


        marker_c5b2ec52215342018afbbbbacb728ae9.bindPopup(popup_169c1866fac64e0e91ed702c0cf2d08e);





        var marker_29bd92ab26c542b4b21b91398e9df33e = L.marker(
                [42.913213212257574, -78.88751791274862], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_564e78c9d20e47b29039849fa84d600d = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_29bd92ab26c542b4b21b91398e9df33e.setIcon(icon_564e78c9d20e47b29039849fa84d600d);


        var popup_bc5bbbfa5518427ca7e93214a6411f4b = L.popup({
            maxWidth: '300'
        });


        var html_59aaf5ebf8ec4805be3bd9328f324778 = $('<div id="html_59aaf5ebf8ec4805be3bd9328f324778" style="width: 100.0%; height: 100.0%;">Address 10 WINTER, Property Class 210</div>')[0];
        popup_bc5bbbfa5518427ca7e93214a6411f4b.setContent(html_59aaf5ebf8ec4805be3bd9328f324778);


        marker_29bd92ab26c542b4b21b91398e9df33e.bindPopup(popup_bc5bbbfa5518427ca7e93214a6411f4b);





        var marker_55dcc6ab0dcd4f9795cdde3bc71bf5c8 = L.marker(
                [42.913011694629, -78.88755273992614], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_da9085020c8f49388126cb6347ad911b = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_55dcc6ab0dcd4f9795cdde3bc71bf5c8.setIcon(icon_da9085020c8f49388126cb6347ad911b);


        var popup_e51639bfdd5d46928e681ae2daf3d0a1 = L.popup({
            maxWidth: '300'
        });


        var html_67c5bcaefc9341109e9975cdf3ecf0a4 = $('<div id="html_67c5bcaefc9341109e9975cdf3ecf0a4" style="width: 100.0%; height: 100.0%;">Address 398 MASSACHUSETTS, Property Class 220</div>')[0];
        popup_e51639bfdd5d46928e681ae2daf3d0a1.setContent(html_67c5bcaefc9341109e9975cdf3ecf0a4);


        marker_55dcc6ab0dcd4f9795cdde3bc71bf5c8.bindPopup(popup_e51639bfdd5d46928e681ae2daf3d0a1);





        var marker_ac6ecc903a4e4ee2a629d7577342be6e = L.marker(
                [42.91289194016171, -78.88952135799981], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_38d676afa5d147ae82857c1cf4fd0f5d = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_ac6ecc903a4e4ee2a629d7577342be6e.setIcon(icon_38d676afa5d147ae82857c1cf4fd0f5d);


        var popup_f83546fb10c449ffb714cc13980e7aeb = L.popup({
            maxWidth: '300'
        });


        var html_7068ca69f9bc4462bbc6fd21f527f329 = $('<div id="html_7068ca69f9bc4462bbc6fd21f527f329" style="width: 100.0%; height: 100.0%;">Address 41 LAWRENCE, Property Class 311</div>')[0];
        popup_f83546fb10c449ffb714cc13980e7aeb.setContent(html_7068ca69f9bc4462bbc6fd21f527f329);


        marker_ac6ecc903a4e4ee2a629d7577342be6e.bindPopup(popup_f83546fb10c449ffb714cc13980e7aeb);





        var marker_65799246b91b414892c5436b4bbfdcdb = L.marker(
                [42.91292192420117, -78.88954977031867], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_30f5d029af3b4117929e79fed4ecaacb = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_65799246b91b414892c5436b4bbfdcdb.setIcon(icon_30f5d029af3b4117929e79fed4ecaacb);


        var popup_8c9b8bc66ce640b1aea80df73eafe2a8 = L.popup({
            maxWidth: '300'
        });


        var html_0ebe8be97a4447c9a6aea755a1fd6f48 = $('<div id="html_0ebe8be97a4447c9a6aea755a1fd6f48" style="width: 100.0%; height: 100.0%;">Address 43 LAWRENCE, Property Class 311</div>')[0];
        popup_8c9b8bc66ce640b1aea80df73eafe2a8.setContent(html_0ebe8be97a4447c9a6aea755a1fd6f48);


        marker_65799246b91b414892c5436b4bbfdcdb.bindPopup(popup_8c9b8bc66ce640b1aea80df73eafe2a8);





        var marker_ea7f5b213b194bffaa5f27789064b54a = L.marker(
                [42.912011408315095, -78.88923312516177], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_02f13d4275d04df190900804ff20ea16 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_ea7f5b213b194bffaa5f27789064b54a.setIcon(icon_02f13d4275d04df190900804ff20ea16);


        var popup_a940a6a0242e4c9fa1deae06ea0ad4e3 = L.popup({
            maxWidth: '300'
        });


        var html_fa09f9f9738742e49a7b14a3282c64e6 = $('<div id="html_fa09f9f9738742e49a7b14a3282c64e6" style="width: 100.0%; height: 100.0%;">Address 335 MASSACHUSETTS, Property Class 220</div>')[0];
        popup_a940a6a0242e4c9fa1deae06ea0ad4e3.setContent(html_fa09f9f9738742e49a7b14a3282c64e6);


        marker_ea7f5b213b194bffaa5f27789064b54a.bindPopup(popup_a940a6a0242e4c9fa1deae06ea0ad4e3);





        var marker_817d757e09c440148b8e20ceaab68861 = L.marker(
                [42.913343449513945, -78.8911909037311], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_79d571788fcb4ef2a4a1ae03f2ef6487 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_817d757e09c440148b8e20ceaab68861.setIcon(icon_79d571788fcb4ef2a4a1ae03f2ef6487);


        var popup_c93f42909b4444ac90639b0be5823a4e = L.popup({
            maxWidth: '300'
        });


        var html_04353f560ded4597977cfe965b6fc73f = $('<div id="html_04353f560ded4597977cfe965b6fc73f" style="width: 100.0%; height: 100.0%;">Address 291 HAMPSHIRE, Property Class 311</div>')[0];
        popup_c93f42909b4444ac90639b0be5823a4e.setContent(html_04353f560ded4597977cfe965b6fc73f);


        marker_817d757e09c440148b8e20ceaab68861.bindPopup(popup_c93f42909b4444ac90639b0be5823a4e);





        var marker_9172c1f1513048edab3049566434c332 = L.marker(
                [42.91302535682353, -78.8898297490072], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_21b33e41c0104023923af9a143a6c292 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_9172c1f1513048edab3049566434c332.setIcon(icon_21b33e41c0104023923af9a143a6c292);


        var popup_5791b0ab0f7345278b1fdc1691eb21b0 = L.popup({
            maxWidth: '300'
        });


        var html_8c4fba55646748f4a774afe577cc80bf = $('<div id="html_8c4fba55646748f4a774afe577cc80bf" style="width: 100.0%; height: 100.0%;">Address 54 LAWRENCE, Property Class 311</div>')[0];
        popup_5791b0ab0f7345278b1fdc1691eb21b0.setContent(html_8c4fba55646748f4a774afe577cc80bf);


        marker_9172c1f1513048edab3049566434c332.bindPopup(popup_5791b0ab0f7345278b1fdc1691eb21b0);





        var marker_f56c907c419f4add8d9df8b5c56d4b5f = L.marker(
                [42.91377214257379, -78.88712622464601], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_ddddea6146bb4405a12f91f25285cfb2 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_f56c907c419f4add8d9df8b5c56d4b5f.setIcon(icon_ddddea6146bb4405a12f91f25285cfb2);


        var popup_9124e82b85ed4d62ae5679f3571860dd = L.popup({
            maxWidth: '300'
        });


        var html_fb5237deed574bcdb82f61a99245bb26 = $('<div id="html_fb5237deed574bcdb82f61a99245bb26" style="width: 100.0%; height: 100.0%;">Address 102 EIGHTEENTH, Property Class 311</div>')[0];
        popup_9124e82b85ed4d62ae5679f3571860dd.setContent(html_fb5237deed574bcdb82f61a99245bb26);


        marker_f56c907c419f4add8d9df8b5c56d4b5f.bindPopup(popup_9124e82b85ed4d62ae5679f3571860dd);





        var marker_c59cb20eb939479997cffd4a9234ce11 = L.marker(
                [42.91322723135471, -78.88712158370815], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_4aff5982c2414293882faef0ebdc5284 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_c59cb20eb939479997cffd4a9234ce11.setIcon(icon_4aff5982c2414293882faef0ebdc5284);


        var popup_bb740edc9a7f4607bb06128a21ca5e3c = L.popup({
            maxWidth: '300'
        });


        var html_bedfe8568d794c59a5cd787482244073 = $('<div id="html_bedfe8568d794c59a5cd787482244073" style="width: 100.0%; height: 100.0%;">Address 412 MASSACHUSETTS, Property Class 230</div>')[0];
        popup_bb740edc9a7f4607bb06128a21ca5e3c.setContent(html_bedfe8568d794c59a5cd787482244073);


        marker_c59cb20eb939479997cffd4a9234ce11.bindPopup(popup_bb740edc9a7f4607bb06128a21ca5e3c);





        var marker_adb6c989df774b188a94b7b9c0813762 = L.marker(
                [42.91378351425097, -78.88788793903989], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_c1910a9e68854a33be8473ce8c81616e = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_adb6c989df774b188a94b7b9c0813762.setIcon(icon_c1910a9e68854a33be8473ce8c81616e);


        var popup_7e518e4a068941f7abf249a22370531a = L.popup({
            maxWidth: '300'
        });


        var html_a37e0d6f0bba42e686ac6199435bcc9f = $('<div id="html_a37e0d6f0bba42e686ac6199435bcc9f" style="width: 100.0%; height: 100.0%;">Address 43 WINTER, Property Class 311</div>')[0];
        popup_7e518e4a068941f7abf249a22370531a.setContent(html_a37e0d6f0bba42e686ac6199435bcc9f);


        marker_adb6c989df774b188a94b7b9c0813762.bindPopup(popup_7e518e4a068941f7abf249a22370531a);





        var marker_e5115cda0a5e4281ac5ff96ab91ee642 = L.marker(
                [42.9147796824665, -78.88839208842151], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_f04ab2bdc09a48d58b7eae4df3f02c18 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_e5115cda0a5e4281ac5ff96ab91ee642.setIcon(icon_f04ab2bdc09a48d58b7eae4df3f02c18);


        var popup_000bac3d9b3b4ef78da4acc5f5342a82 = L.popup({
            maxWidth: '300'
        });


        var html_37e7db53389a47d8b1c8252087f1fe00 = $('<div id="html_37e7db53389a47d8b1c8252087f1fe00" style="width: 100.0%; height: 100.0%;">Address 381 HAMPSHIRE, Property Class 311</div>')[0];
        popup_000bac3d9b3b4ef78da4acc5f5342a82.setContent(html_37e7db53389a47d8b1c8252087f1fe00);


        marker_e5115cda0a5e4281ac5ff96ab91ee642.bindPopup(popup_000bac3d9b3b4ef78da4acc5f5342a82);





        var marker_7dc7cdee6d554d54a15a17db22315759 = L.marker(
                [42.91159333538831, -78.88749253553128], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_e19b8ff399e643acadb152422b3bd091 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_7dc7cdee6d554d54a15a17db22315759.setIcon(icon_e19b8ff399e643acadb152422b3bd091);


        var popup_08412af3c5f74aceae4da7b0098ec5aa = L.popup({
            maxWidth: '300'
        });


        var html_47fead72a0a54263bf78b5ec2a3ff0b8 = $('<div id="html_47fead72a0a54263bf78b5ec2a3ff0b8" style="width: 100.0%; height: 100.0%;">Address 19 SHIELDS, Property Class 311</div>')[0];
        popup_08412af3c5f74aceae4da7b0098ec5aa.setContent(html_47fead72a0a54263bf78b5ec2a3ff0b8);


        marker_7dc7cdee6d554d54a15a17db22315759.bindPopup(popup_08412af3c5f74aceae4da7b0098ec5aa);





        var marker_8b6a92c001214950b08786163aeceda0 = L.marker(
                [42.91272819694016, -78.88784579497533], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_3be9cdf69ce94267b6da2aad6f9540ae = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_8b6a92c001214950b08786163aeceda0.setIcon(icon_3be9cdf69ce94267b6da2aad6f9540ae);


        var popup_5f4a77688958421cac7305e171edd921 = L.popup({
            maxWidth: '300'
        });


        var html_6c291b74f8ce4614a2b781a792eeeb71 = $('<div id="html_6c291b74f8ce4614a2b781a792eeeb71" style="width: 100.0%; height: 100.0%;">Address 387 MASSACHUSETTS, Property Class 210</div>')[0];
        popup_5f4a77688958421cac7305e171edd921.setContent(html_6c291b74f8ce4614a2b781a792eeeb71);


        marker_8b6a92c001214950b08786163aeceda0.bindPopup(popup_5f4a77688958421cac7305e171edd921);





        var marker_54e3c41cc3fc455e827cd99c6cfd31d9 = L.marker(
                [42.91288935735869, -78.88753053654939], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_8c405d69684c42dc855671b6b6c0aa2b = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_54e3c41cc3fc455e827cd99c6cfd31d9.setIcon(icon_8c405d69684c42dc855671b6b6c0aa2b);


        var popup_38676c62b4dd4b75ad6d34ba3657e5b5 = L.popup({
            maxWidth: '300'
        });


        var html_1969595fac3a4fc0a43a89f8a4eae146 = $('<div id="html_1969595fac3a4fc0a43a89f8a4eae146" style="width: 100.0%; height: 100.0%;">Address 397 MASSACHUSETTS, Property Class 411</div>')[0];
        popup_38676c62b4dd4b75ad6d34ba3657e5b5.setContent(html_1969595fac3a4fc0a43a89f8a4eae146);


        marker_54e3c41cc3fc455e827cd99c6cfd31d9.bindPopup(popup_38676c62b4dd4b75ad6d34ba3657e5b5);





        var marker_7690448492574703bf264596be36a0aa = L.marker(
                [42.912759029821906, -78.88498265713383], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_f3882f24fe0344f092b3f72080290f07 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_7690448492574703bf264596be36a0aa.setIcon(icon_f3882f24fe0344f092b3f72080290f07);


        var popup_8ace68233b0249359558ac6868d62d35 = L.popup({
            maxWidth: '300'
        });


        var html_0746316049c743d18e2c5c9d4dd940ea = $('<div id="html_0746316049c743d18e2c5c9d4dd940ea" style="width: 100.0%; height: 100.0%;">Address 26 NINETEENTH, Property Class 311</div>')[0];
        popup_8ace68233b0249359558ac6868d62d35.setContent(html_0746316049c743d18e2c5c9d4dd940ea);


        marker_7690448492574703bf264596be36a0aa.bindPopup(popup_8ace68233b0249359558ac6868d62d35);





        var marker_8bef454f1b994f5bbba3a99ea4707ec8 = L.marker(
                [42.91254157330648, -78.88477930369004], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_21bde76a4fc6456d9e9ad506676259e9 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_8bef454f1b994f5bbba3a99ea4707ec8.setIcon(icon_21bde76a4fc6456d9e9ad506676259e9);


        var popup_ced5de38800a4c39a675e599fbb88d4d = L.popup({
            maxWidth: '300'
        });


        var html_245de993f7c64fbc8643aab050893c54 = $('<div id="html_245de993f7c64fbc8643aab050893c54" style="width: 100.0%; height: 100.0%;">Address 16 NINETEENTH, Property Class 311</div>')[0];
        popup_ced5de38800a4c39a675e599fbb88d4d.setContent(html_245de993f7c64fbc8643aab050893c54);


        marker_8bef454f1b994f5bbba3a99ea4707ec8.bindPopup(popup_ced5de38800a4c39a675e599fbb88d4d);





        var marker_d90e83112eee42b1b6cc29d52744457b = L.marker(
                [42.914362840773336, -78.88461750619247], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_c3e4d7831418422ba7dadbf954a51dd0 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_d90e83112eee42b1b6cc29d52744457b.setIcon(icon_c3e4d7831418422ba7dadbf954a51dd0);


        var popup_8035dadc3ddf4ef09a9b5134bd01aa7a = L.popup({
            maxWidth: '300'
        });


        var html_b58c8ca764714b229bbe2687a1f2d171 = $('<div id="html_b58c8ca764714b229bbe2687a1f2d171" style="width: 100.0%; height: 100.0%;">Address 493 MASSACHUSETTS, Property Class 220</div>')[0];
        popup_8035dadc3ddf4ef09a9b5134bd01aa7a.setContent(html_b58c8ca764714b229bbe2687a1f2d171);


        marker_d90e83112eee42b1b6cc29d52744457b.bindPopup(popup_8035dadc3ddf4ef09a9b5134bd01aa7a);





        var marker_e80b0a5c900744ee859845b242a2e9fc = L.marker(
                [42.91363294776143, -78.88443367570108], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_4cd6edd4a93446f7ba41899c2f8818ac = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_e80b0a5c900744ee859845b242a2e9fc.setIcon(icon_4cd6edd4a93446f7ba41899c2f8818ac);


        var popup_73fd13789c1e4fb186b3a0fc0f3c792a = L.popup({
            maxWidth: '300'
        });


        var html_622daf4b861b48aba6f33a02b2b3b22f = $('<div id="html_622daf4b861b48aba6f33a02b2b3b22f" style="width: 100.0%; height: 100.0%;">Address 99 CHENANGO, Property Class 210</div>')[0];
        popup_73fd13789c1e4fb186b3a0fc0f3c792a.setContent(html_622daf4b861b48aba6f33a02b2b3b22f);


        marker_e80b0a5c900744ee859845b242a2e9fc.bindPopup(popup_73fd13789c1e4fb186b3a0fc0f3c792a);





        var marker_fb9bca3dcc1748dea8181f7409e99985 = L.marker(
                [42.91323278417447, -78.88684347071474], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_f270b038971e42f8b2da7cd7e973bf0a = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_fb9bca3dcc1748dea8181f7409e99985.setIcon(icon_f270b038971e42f8b2da7cd7e973bf0a);


        var popup_bfedaf3f0d474a4488c2760ba3ff535f = L.popup({
            maxWidth: '300'
        });


        var html_4ccdcd600e5e4f3c89009cf3290fdeef = $('<div id="html_4ccdcd600e5e4f3c89009cf3290fdeef" style="width: 100.0%; height: 100.0%;">Address 417 MASSACHUSETTS, Property Class 482</div>')[0];
        popup_bfedaf3f0d474a4488c2760ba3ff535f.setContent(html_4ccdcd600e5e4f3c89009cf3290fdeef);


        marker_fb9bca3dcc1748dea8181f7409e99985.bindPopup(popup_bfedaf3f0d474a4488c2760ba3ff535f);





        var marker_3dbc199df85149ad8c274343ab5ce0a4 = L.marker(
                [42.910128121077, -78.89293094682982], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_56a1e0027d6340f9bc5d3a8a76676a49 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_3dbc199df85149ad8c274343ab5ce0a4.setIcon(icon_56a1e0027d6340f9bc5d3a8a76676a49);


        var popup_a807890ae22148b8a1991b7b76a4a04f = L.popup({
            maxWidth: '300'
        });


        var html_7a987148bb354847ab9f180332200469 = $('<div id="html_7a987148bb354847ab9f180332200469" style="width: 100.0%; height: 100.0%;">Address 217 MASSACHUSETTS, Property Class 311</div>')[0];
        popup_a807890ae22148b8a1991b7b76a4a04f.setContent(html_7a987148bb354847ab9f180332200469);


        marker_3dbc199df85149ad8c274343ab5ce0a4.bindPopup(popup_a807890ae22148b8a1991b7b76a4a04f);





        var marker_48879e0b5aad437da5be52ec8415e72f = L.marker(
                [42.91134999658804, -78.89155784666265], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_aa8e9f04a660459b8f14ad81c2fa994b = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_48879e0b5aad437da5be52ec8415e72f.setIcon(icon_aa8e9f04a660459b8f14ad81c2fa994b);


        var popup_490d49b497d04ee88fd7ccd24d0001be = L.popup({
            maxWidth: '300'
        });


        var html_27e4bd6c038a45378a608b50d904d95c = $('<div id="html_27e4bd6c038a45378a608b50d904d95c" style="width: 100.0%; height: 100.0%;">Address 422 FOURTEENTH, Property Class 220</div>')[0];
        popup_490d49b497d04ee88fd7ccd24d0001be.setContent(html_27e4bd6c038a45378a608b50d904d95c);


        marker_48879e0b5aad437da5be52ec8415e72f.bindPopup(popup_490d49b497d04ee88fd7ccd24d0001be);





        var marker_ecf6094d8a0243b29690136b785d0bfc = L.marker(
                [42.9099280856192, -78.89188804731751], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_795cec52e61b426e97abfea7833ae2ab = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_ecf6094d8a0243b29690136b785d0bfc.setIcon(icon_795cec52e61b426e97abfea7833ae2ab);


        var popup_ffeff9b427394f72917382a23f590832 = L.popup({
            maxWidth: '300'
        });


        var html_298df40e0d21435da6445780ed15cfa5 = $('<div id="html_298df40e0d21435da6445780ed15cfa5" style="width: 100.0%; height: 100.0%;">Address 378 NORMAL, Property Class 311</div>')[0];
        popup_ffeff9b427394f72917382a23f590832.setContent(html_298df40e0d21435da6445780ed15cfa5);


        marker_ecf6094d8a0243b29690136b785d0bfc.bindPopup(popup_ffeff9b427394f72917382a23f590832);





        var marker_b8aad26bafc74d139255f0e93718db96 = L.marker(
                [42.908631671300064, -78.89213816495375], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_c36a7919aa6145fcb4224fd508a5edea = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_b8aad26bafc74d139255f0e93718db96.setIcon(icon_c36a7919aa6145fcb4224fd508a5edea);


        var popup_283004f3b790467fb53c7369579b8561 = L.popup({
            maxWidth: '300'
        });


        var html_a64400a5904046a6b8ce0b396859ff5a = $('<div id="html_a64400a5904046a6b8ce0b396859ff5a" style="width: 100.0%; height: 100.0%;">Address 429 PLYMOUTH, Property Class 612</div>')[0];
        popup_283004f3b790467fb53c7369579b8561.setContent(html_a64400a5904046a6b8ce0b396859ff5a);


        marker_b8aad26bafc74d139255f0e93718db96.bindPopup(popup_283004f3b790467fb53c7369579b8561);





        var marker_a071a3b8755e47c187310a03360a1c68 = L.marker(
                [42.91056880874808, -78.89207114205789], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_b149886b8d8d40a9b8273ef7bd8195ee = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_a071a3b8755e47c187310a03360a1c68.setIcon(icon_b149886b8d8d40a9b8273ef7bd8195ee);


        var popup_0f715bdf681347c29120c84087e5d671 = L.popup({
            maxWidth: '300'
        });


        var html_e9118f92247b4c63be770d31a2c43bee = $('<div id="html_e9118f92247b4c63be770d31a2c43bee" style="width: 100.0%; height: 100.0%;">Address 247 MASSACHUSETTS, Property Class 311</div>')[0];
        popup_0f715bdf681347c29120c84087e5d671.setContent(html_e9118f92247b4c63be770d31a2c43bee);


        marker_a071a3b8755e47c187310a03360a1c68.bindPopup(popup_0f715bdf681347c29120c84087e5d671);





        var marker_8be720a25755407b82f9e0a6b99a03ca = L.marker(
                [42.91129146587853, -78.88935768806022], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_7846727712ff4951a1b1a26807080acc = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_8be720a25755407b82f9e0a6b99a03ca.setIcon(icon_7846727712ff4951a1b1a26807080acc);


        var popup_f8732258f2fe4e7c94cda77614e9ce85 = L.popup({
            maxWidth: '300'
        });


        var html_25f8d43409d344b99d8147a322f1a028 = $('<div id="html_25f8d43409d344b99d8147a322f1a028" style="width: 100.0%; height: 100.0%;">Address 608 UTICA WEST, Property Class 311</div>')[0];
        popup_f8732258f2fe4e7c94cda77614e9ce85.setContent(html_25f8d43409d344b99d8147a322f1a028);


        marker_8be720a25755407b82f9e0a6b99a03ca.bindPopup(popup_f8732258f2fe4e7c94cda77614e9ce85);





        var marker_883dac2534674db9973ceb8dd0a866bf = L.marker(
                [42.91126909575775, -78.88772025405805], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_a5e77cf903dd4871b3df0037dc55d65c = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_883dac2534674db9973ceb8dd0a866bf.setIcon(icon_a5e77cf903dd4871b3df0037dc55d65c);


        var popup_a80c7eedda0d430f92a66d053e9edb7c = L.popup({
            maxWidth: '300'
        });


        var html_64389847102e4536b5addcbc124020b5 = $('<div id="html_64389847102e4536b5addcbc124020b5" style="width: 100.0%; height: 100.0%;">Address 566 UTICA WEST, Property Class 311</div>')[0];
        popup_a80c7eedda0d430f92a66d053e9edb7c.setContent(html_64389847102e4536b5addcbc124020b5);


        marker_883dac2534674db9973ceb8dd0a866bf.bindPopup(popup_a80c7eedda0d430f92a66d053e9edb7c);





        var marker_533650755eb24b30bdca5156f32d8462 = L.marker(
                [42.91126910321802, -78.88756443649525], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_e56660705c724db9894fb929fb0ae097 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_533650755eb24b30bdca5156f32d8462.setIcon(icon_e56660705c724db9894fb929fb0ae097);


        var popup_67f6725ab0424d91b1470968d7c8d837 = L.popup({
            maxWidth: '300'
        });


        var html_d2aa679fdfe34a048451ffd2d15b3629 = $('<div id="html_d2aa679fdfe34a048451ffd2d15b3629" style="width: 100.0%; height: 100.0%;">Address 562 UTICA WEST, Property Class 220</div>')[0];
        popup_67f6725ab0424d91b1470968d7c8d837.setContent(html_d2aa679fdfe34a048451ffd2d15b3629);


        marker_533650755eb24b30bdca5156f32d8462.bindPopup(popup_67f6725ab0424d91b1470968d7c8d837);





        var marker_6a70a569bab440c2b15d7d78474cd51c = L.marker(
                [42.908846161748436, -78.88902468264355], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_65e5b0240ffd41e8b3732404ccbbba98 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_6a70a569bab440c2b15d7d78474cd51c.setIcon(icon_65e5b0240ffd41e8b3732404ccbbba98);


        var popup_b473c93d47b34315b23c2613316da8e6 = L.popup({
            maxWidth: '300'
        });


        var html_99042eb8d9d340da9b030a0d0539369c = $('<div id="html_99042eb8d9d340da9b030a0d0539369c" style="width: 100.0%; height: 100.0%;">Address 309 FOURTEENTH, Property Class 311</div>')[0];
        popup_b473c93d47b34315b23c2613316da8e6.setContent(html_99042eb8d9d340da9b030a0d0539369c);


        marker_6a70a569bab440c2b15d7d78474cd51c.bindPopup(popup_b473c93d47b34315b23c2613316da8e6);





        var marker_d29d64f19e6e45fe950d7deaf7be7593 = L.marker(
                [42.9109682691436, -78.88670976394803], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_2d254f75de9947e788278c7d970ffd89 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_d29d64f19e6e45fe950d7deaf7be7593.setIcon(icon_2d254f75de9947e788278c7d970ffd89);


        var popup_2c30a69c87ff4025818929def9689993 = L.popup({
            maxWidth: '300'
        });


        var html_7b56f4d1652244b68437b6dd390673b3 = $('<div id="html_7b56f4d1652244b68437b6dd390673b3" style="width: 100.0%; height: 100.0%;">Address 401 RHODE ISLAND, Property Class 311</div>')[0];
        popup_2c30a69c87ff4025818929def9689993.setContent(html_7b56f4d1652244b68437b6dd390673b3);


        marker_d29d64f19e6e45fe950d7deaf7be7593.bindPopup(popup_2c30a69c87ff4025818929def9689993);





        var marker_8f36afbf8ec9464cbd91d68d96a504cf = L.marker(
                [42.906606061097776, -78.88877315734406], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_13b5793ab9924fcdac1a041297ad8694 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_8f36afbf8ec9464cbd91d68d96a504cf.setIcon(icon_13b5793ab9924fcdac1a041297ad8694);


        var popup_f507b936a922446d9b9393f7c1f16b61 = L.popup({
            maxWidth: '300'
        });


        var html_51c1ed441b8947b49faf13f3ebd70823 = $('<div id="html_51c1ed441b8947b49faf13f3ebd70823" style="width: 100.0%; height: 100.0%;">Address 236 NORMAL, Property Class 220</div>')[0];
        popup_f507b936a922446d9b9393f7c1f16b61.setContent(html_51c1ed441b8947b49faf13f3ebd70823);


        marker_8f36afbf8ec9464cbd91d68d96a504cf.bindPopup(popup_f507b936a922446d9b9393f7c1f16b61);





        var marker_d12a3985097648f98dc89a5dc8295747 = L.marker(
                [42.90656001794232, -78.88872871567786], {
                    icon: new L.Icon.Default()
                }
            )
            .addTo(feature_group_546f297b078747d5a4b8ebbc0b8defa4);



        var icon_66464c6fa3824469b79c98c503f932f9 = L.AwesomeMarkers.icon({
            icon: 'info-circle',
            iconColor: 'white',
            markerColor: 'green',
            prefix: 'fa',
            extraClasses: 'fa-rotate-0'
        });
        marker_d12a3985097648f98dc89a5dc8295747.setIcon(icon_66464c6fa3824469b79c98c503f932f9);


        var popup_55108035693e4d60bdb832c4225ac18d = L.popup({
            maxWidth: '300'
        });


        var html_2407f6bbc60b41b88f5c3f611579843a = $('<div id="html_2407f6bbc60b41b88f5c3f611579843a" style="width: 100.0%; height: 100.0%;">Address 234 NORMAL, Property Class 311</div>')[0];
        popup_55108035693e4d60bdb832c4225ac18d.setContent(html_2407f6bbc60b41b88f5c3f611579843a);


        marker_d12a3985097648f98dc89a5dc8295747.bindPopup(popup_55108035693e4d60bdb832c4225ac18d);




        var layer_control_f4eaa7ab45d049bd98f533ed9c9898eb = {
            base_layers: {
                "openstreetmap": tile_layer_0ee86ad9ee7f4dc495438d3f3d4e9613,
            },
            overlays: {
                "APARTMENT": feature_group_36de2da8ef30485a94314d25f341b23e,
                "TWO FAMILY DWELLING": feature_group_040dac7c3fd7492f9f8dcb7f400d5c34,
                "ONE FAMILY DWELLING": feature_group_f7f7cbfc31c444479da15991f70c7583,
                "RESIDENTIAL LAND WITH SMALL IMPROVEMENTS": feature_group_1be39076377a49e896acf8e1cbcad4f2,
                "RESIDENTIAL VACANT LAND": feature_group_2944f3d438874f9dbb03bc72e070f156,
                "COMMERCIAL VACANT LAND": feature_group_515934f4d01646dc94260495072f2092,
                "PUSH Locations": feature_group_546f297b078747d5a4b8ebbc0b8defa4,
            }
        };
        L.control.layers(
            layer_control_f4eaa7ab45d049bd98f533ed9c9898eb.base_layers,
            layer_control_f4eaa7ab45d049bd98f533ed9c9898eb.overlays, {
                position: 'topright',
                collapsed: true,
                autoZIndex: true
            }).addTo(map_4f5f9d848005489ba785ca362be66ab5);

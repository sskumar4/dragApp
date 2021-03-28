var width = window.innerWidth;
      var height = window.innerHeight;

      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
      });

      var layerRect1 = new Konva.Layer();
      var layerRect2 = new Konva.Layer();    
      var layerRect3 = new Konva.Layer();
      var layerCircle = new Konva.Layer();
      var layerLine = new Konva.Layer();

      var rect1 = new Konva.Rect({
        x: 20,
        y: 20,
        width: 100,
        height: 50,
        // fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
      });
      // add the shape to the layer
      layerRect1.add(rect1);

      var rect2 = new Konva.Rect({
        x: 150,
        y: 40,
        width: 100,
        height: 50,
        // fill: 'red',
        // shadowBlur: 10,
        stroke: 'black',
        cornerRadius: 10,
        draggable: true,
      });
      layerRect2.add(rect2);

      var rect3 = new Konva.Rect({
        x: 50,
        y: 120,
        width: 100,
        height: 100,
        // fill: 'blue',
        stroke: 'black',
        cornerRadius: [0, 10, 20, 30],
        draggable: true,
      });
      layerRect3.add(rect3);
      var circle = new Konva.Circle({
        x: stage.width() / 4,
        y: stage.height() / 2,
        radius: 70,
        // fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
      });

      // add the shape to the layer
      layerCircle.add(circle);

      var blackLine = new Konva.Line({
        points: [100, 370,  300, 120],
        stroke: 'black',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round',
        draggable: true,
      });

      layerLine.add(blackLine);
      var trRect1 = new Konva.Transformer();
      var trRect2 = new Konva.Transformer();
      var trRect3 = new Konva.Transformer();
      var trCircle = new Konva.Transformer();
      var trLine = new Konva.Transformer({
        nodes: [blackLine],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
      });
      layerRect1.add(trRect1);
      layerRect2.add(trRect2);
      layerRect3.add(trRect3);
      layerCircle.add(trCircle);
      layerLine.add(trLine);

      // by default select all shapes
      // tr.nodes([rect1,rect2,rect3,
      // circle, blackLine]);
      trRect1.nodes([rect1]);
      trRect2.nodes([rect2]);
      trRect3.nodes([rect3]);
      trCircle.nodes([circle]);
      trLine.nodes([blackLine]);
      layerRect1.draw();
      layerRect2.draw();
      layerRect3.draw();
      layerCircle.draw();
      layerLine.draw();
      // add the layer to the stage
      stage.add(layerRect1);
      stage.add(layerRect2);
      stage.add(layerRect3);
      stage.add(layerCircle);
      stage.add(layerLine);
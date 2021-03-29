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
      var layerLine1 = new Konva.Layer();
      var rect1 = new Konva.Rect({
        x: 50,
        y: 150,
        width: 150,
        height: 50,
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
      });
      // add rectangle 1 to the layer
      layerRect1.add(rect1);

      var rect2 = new Konva.Rect({
        x: 50,
        y: 40,
        width: 100,
        height: 50,
        stroke: 'black',
        cornerRadius: 10,
        draggable: true,
      });
      // add rectangle 2 to the layer
      layerRect2.add(rect2);

      var rect3 = new Konva.Rect({
        x: 50,
        y: 250,
        width: 100,
        height: 100,
        stroke: 'black',
        cornerRadius: [0, 10, 20, 30],
        draggable: true,
      });
      // add rectangle 2 to the layer
      layerRect3.add(rect3);
      var circle = new Konva.Circle({
        x: stage.width() / 6,
        y: stage.height() / 2,
        radius: 50,
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
      });

      // add circle to the layer
      layerCircle.add(circle);

      var blackLine = new Konva.Line({
        points: [220, 200,  300, 120],
        stroke: 'black',
        strokeWidth: 3,
        lineCap: 'round',
        lineJoin: 'round',
        draggable: true,
      });
      // add line to the layer
      layerLine.add(blackLine);

      var blackLine1 = new Konva.Line({
        points: [300, 280,  380, 120],
        stroke: 'black',
        strokeWidth: 3,
        lineCap: 'round',
        lineJoin: 'round',
        draggable: true,
      });
      // add line 1 to the layer
      layerLine1.add(blackLine1);

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
      var trLine1 = new Konva.Transformer({
        nodes: [blackLine1],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
      });
      layerRect1.add(trRect1);
      layerRect2.add(trRect2);
      layerRect3.add(trRect3);
      layerCircle.add(trCircle);
      layerLine.add(trLine);
      layerLine.add(trLine1);
      trRect1.nodes([rect1]);
      trRect2.nodes([rect2]);
      trRect3.nodes([rect3]);
      trCircle.nodes([circle]);
      trLine.nodes([blackLine]);
      trLine1.nodes([blackLine1]);
      layerRect1.draw();
      layerRect2.draw();
      layerRect3.draw();
      layerCircle.draw();
      layerLine.draw();
      layerLine1.draw();
      // add the shapes to the stage
      stage.add(layerRect1);
      stage.add(layerRect2);
      stage.add(layerRect3);
      stage.add(layerCircle);
      stage.add(layerLine);
      stage.add(layerLine1);

$(function(){
    // 初始化Web Uploader
    var relsUploader = WebUploader.create({
      // 选完文件后，是否自动上传。
      auto: true,

      // duplicate: true,

      // swf文件路径,可兼容低版本ie
      swf: '/js/lib/webuploader/Uploader.swf',
      formData: {
        method:'homebaseaction.base.housesourceimg.batchupload2',
        timestamp:new Date().getTime(),
        v:'1.0.0'
        // imglist:"afhafhafkafk"
      },
      // 文件接收服务端。
      server: 'http://192.168.20.22/router/rest/homebaseaction/homebaseaction.base.housesourceimg.batchupload2',
      method : 'POST',
      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      pick: '#filePicker',
      //文件总数量最大值
      fileNumLimit: 24,
      //单个大小限制
      fileSingleSizeLimit: 10*1024*1024,
      // 只允许选择图片文件。
      accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/*'
      }
    });

    // 当有文件添加进来的时候
    relsUploader.on( 'fileQueued', function( file ) {
      var $li = $(
            '<li id="' + file.id + '" class="file-item thumbnail">' +
              // '<img />' +
              '<p class="imgWrap"></p>' + 
              '<p class="progress"></p>'+
              // '<span class="cover-bg"></span><span class="del-bg"></span>' +
              // '<span class="cover-icon">设为封面</span><span class="del-icon">删除</span>'+
            '</li>'),
          $wrap = $li.find('p.imgWrap'),
          $progress = $li.find('p.progress');


      // $list为容器jQuery实例
      $("#fileList").append($li);

      // 创建缩略图
      var thumbnailWidth=220,
          thumbnailHeight=165;
          $wrap.text( '预览中' );
      relsUploader.makeThumb( file, function( error, src ) {
        if ( error ) {
          // $img.replaceWith('<span>不能预览</span>');
          $wrap.text( '不能预览' ); 
          return;
        }
        var img = $('<img src="'+src+'">'),
            options = '<span class="cover-bg"></span><span class="del-bg"></span><span class="cover-icon">设为封面</span><span class="del-icon">删除</span>';
        $wrap.empty().append(img);
        $progress.replaceWith(options);

        // var sign = Math.random().toString(36).slice(2);
        // var info = {
        //   imgType:"8",
        //   imgTypeDesc:"房源图"
        // }
        // var aa = [];
        // var file = relsUploader.getFiles()[0].getSource().getSource();
        // sign += file;
        // sign += JSON.stringify(info);
        // aa.push(sign);
        // relsUploader.options.formData.imglist = JSON.stringify(aa);

      }, thumbnailWidth, thumbnailHeight );
      //删除
      $li.on('click',".del-icon", function() {
        relsUploader.removeFile(file,true);//不要遗漏
        $(this).parents(".thumbnail").remove();
      })
      //设置封面
      // ohinterFc.coverSet();

    });
    
    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
    relsUploader.on( 'uploadSuccess', function( file ) {
        // $( '#'+file.id ).addClass('upload-state-done');
        alert(123);
    });

    // 文件上传失败，显示上传出错。
    relsUploader.on( 'uploadError', function( file ) {
      var $li = $( '#'+file.id ),
          $error = $li.find('div.error');

      // 避免重复创建
      if ( !$error.length ) {
          $error = $('<div class="error"></div>').appendTo( $li );
      }

      // $error.text('上传失败');
    });

    $('#ctlBtn').click(function(event) {
      /* Act on the event */
      // var filelist = relsUploader.getFiles();//图片清单
      // var file = filelist[0].getSource().getSource();
      // console.log(file);
      var 
    });
  })
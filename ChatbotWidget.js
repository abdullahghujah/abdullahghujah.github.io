<script type="text/javascript">
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    console.log("V=" + v.outerHTML);
    console.log("S=" + s.outerHTML);
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '67a46c66a2b7fc2b71d1fcf9' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    console.log("Parent=" + s.parentNode.outerHTML);
  })(document, 'script');
</script>

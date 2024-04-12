# WhatsApp Web Customiser

As of 12/04/2024, WhatsApp has updated their image content-security-policy to only include 

```
"img-src 'self' data: blob: https://.whatsapp.net https://.fbcdn.net .tenor.co *.tenor.com *.giphy.com https://.ytimg.com img.youtube.com https://maps.googleapis.com/maps/api/staticmap https://*.google-analytics.com"
```

Hence, to set a custom image, we are forced to convert our target image to an *animated* gif, and upload it to giphy.com.
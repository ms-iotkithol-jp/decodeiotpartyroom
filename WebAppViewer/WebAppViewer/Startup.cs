using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebAppViewer.Startup))]
namespace WebAppViewer
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            app.MapSignalR();
        }
    }
}

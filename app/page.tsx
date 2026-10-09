export default function Page() {
  return (
    <main className="min-h-screen bg-[#eee]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-white p-8 border border-gray-300">
          <h1 className="text-4xl font-bold text-[#222] mb-8">Example Domain</h1>
          
          <div className="space-y-6 text-[#222]">
            <p>This domain is for use in documentation examples without needing permission. This is not a service; avoid relying on it for testing and monitoring purposes.</p>
            
            <p dir="rtl" lang="ar">هذا النطاق مُخصص للاستخدام في أمثلة التوثيق دون الحاجة إلى إذن. هذه ليست خدمة، يُرجى تجنب الاعتماد عليها لأغراض الاختبار والمراقبة.</p>
            
            <p lang="zh">该域名仅用于文档示例，无需获得许可。这并非一项服务，请勿将其用于测试和监控目的。</p>
            
            <p lang="fr">L'usage de ce domaine est réservé à des exemples de documentation, sans autorisation préalable. Il ne s'agit pas d'un service ; son utilisation à des fins de test ou de surveillance est à éviter.</p>
            
            <p lang="ru">Данный домен предназначен для использования в примерах документации без необходимости получения предварительного разрешения. Это не сервис; не рекомендуется его использование для тестирования и мониторинга.</p>
            
            <p lang="es">Este dominio está destinado al uso en ejemplos de documentación sin necesidad de permiso. Esto no es un servicio; evitar utilizarlo para realizar pruebas o monitoreos.</p>
            
            <p className="mt-8">
              <a 
                href="https://iana.org/help/example-domains" 
                className="text-[#222] hover:underline"
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
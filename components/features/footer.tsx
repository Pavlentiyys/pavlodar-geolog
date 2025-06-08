import React from 'react'
import { Separator } from '../ui/separator'
import { Droplets, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Droplets className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">ПавлодарГидроГеология</h3>
                  <p className="text-gray-400 text-sm">С 1955 года</p>
                </div>
              </div>
              <p className="text-gray-300">
                Ведущий специалист по гидрогеологии и бурению скважин в Казахстане
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Гидрогеологические работы</li>
                <li>Бурение скважин</li>
                <li>Химические анализы</li>
                <li>Мониторинг вод</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Питьевая вода</li>
                <li>Ак булак</li>
                <li>Экологический мониторинг</li>
                <li>Промышленное водоснабжение</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+7 (7182) 35-63-15</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>geoaespavl@rambler.ru</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Казахстан, г. Павлодар</span>
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 ТОО "ПавлодарГидроГеология". Все права защищены.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer

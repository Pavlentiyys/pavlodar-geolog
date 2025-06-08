"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Droplets, Award, Users, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';


const heroSlides = [
  {
    title: "68 лет надежного партнерства",
    subtitle: "С 1955 года обеспечиваем Казахстан чистой водой",
    description: "Ведущий специалист по гидрогеологии и бурению скважин",
    image: "/image1.jpeg"
  },
  {
    title: "Государственные программы",
    subtitle: "68 населенных пунктов обеспечены водой",
    description: "Программа 'Питьевая вода' и 'Ак булак'",
    image: "/image2.jpg"
  },
  {
    title: "Прорывные проекты",
    subtitle: "Участие в 30 ключевых проектах РК",
    description: "От Астаны до Мангистауской области",
    image: "/image3.jpeg"
  }
];

const services = [
  {
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
    title: "Гидрогеологический отдел",
    description: "Мониторинг и гидрогеологическое опробование на 9+ объектах. Составление программ мониторинга подземных вод и отчетов по оценке запасов."
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Буровой цех",
    description: "Бурение гидрогеологических скважин глубиной от 10 до 1500 п.м. Ремонт оборудования и изготовление фильтровых колонн."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Химическая лаборатория",
    description: "Аккредитованная лаборатория с аттестатом соответствия требованиям СТ РК и ИСО/МЭК 17025-2007."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Сервисное обслуживание",
    description: "Полный спектр услуг по гидрогеологии, строительство локальных систем водоснабжения и мониторинг."
  }
];

const keyProjects = [
  {
    title: "Программа 'Питьевая вода'",
    description: "68 населенных пунктов обеспечены системами локального водоснабжения",
    achievement: "68 систем"
  },
  {
    title: "Водоснабжение г. Астаны",
    description: "Акмолинское и Нуринское месторождения подземных вод",
    achievement: "Столица РК"
  },
  {
    title: "Завод 'Каспий Цемент'",
    description: "Один из 30 прорывных проектов Казахстана",
    achievement: "Прорывной проект"
  },
  {
    title: "Экологическая безопасность",
    description: "Ликвидировано 32 самоизливающихся скважины",
    achievement: "32 скважины"
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          className="hero-slider h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <Image 
                  src={slide.image} 
                  alt={slide.title}
                  fill
                  className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-blue-900/70 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl text-white">
                      <Badge className="mb-4 bg-blue-600">{slide.subtitle}</Badge>
                      <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-xl mb-8 text-blue-100">{slide.description}</p>
                      <Button size="lg" variant="secondary">
                        Узнать больше
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">О компании</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">68 лет опыта и надежности</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              С 1955 года, в разгар освоения целины, мы обеспечиваем Казахстан надежными источниками воды. 
              Эволюционировав от Павлодарской гидрогеологической экспедиции до современного ТОО 'Павлодаргидрогеология'.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>1955</CardTitle>
                <CardDescription>Год основания в разгар освоения целины</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>68+ лет</CardTitle>
                <CardDescription>Непрерывного опыта работы</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>68</CardTitle>
                <CardDescription>Населенных пунктов обеспечены водой</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Ключевые проекты</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Масштабные достижения</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyProjects.map((project, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="mb-2">{project.achievement}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Полный спектр гидрогеологических услуг</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Наши преимущества</Badge>
            <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опытные кадры</h3>
              <p className="text-blue-100">Сохранили основное богатство — опытную команду специалистов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Аккредитованная лаборатория</h3>
              <p className="text-blue-100">Соответствие требованиям СТ РК и ИСО/МЭК 17025-2007</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Общереспубликанский охват</h3>
              <p className="text-blue-100">Работы от Павлодарской области до всего Казахстана</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Обратная связь</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600">
                Готовы обсудить ваш проект? Оставьте заявку и наши специалисты свяжутся с вами
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>Телефон</span>
                    </CardTitle>
                    <CardDescription>+7 (7182) 35-63-15</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>Email</span>
                    </CardTitle>
                    <CardDescription>geoaespavl@rambler.ru</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Адрес</span>
                    </CardTitle>
                    <CardDescription>Казахстан, г. Павлодар, с. Жетекши, улица Орда 1.</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>Режим работы</span>
                    </CardTitle>
                    <CardDescription>Пн-Пт: 9:00-18:00</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>Заполните форму и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input id="company" placeholder="Название компании" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (XXX) XXX-XX-XX" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <textarea 
                      id="message" 
                      className="w-full p-3 border border-input rounded-md resize-none"
                      rows={4}
                      placeholder="Опишите ваш проект или вопрос..."
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

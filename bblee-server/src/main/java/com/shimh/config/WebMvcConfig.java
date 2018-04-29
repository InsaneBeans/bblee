package com.shimh.config;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import com.alibaba.fastjson.support.spring.FastJsonViewResponseBodyAdvice;
import com.shimh.common.interceptor.ClearTokenInteceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter{

	public void addResourceHandlers (ResourceHandlerRegistry registry) {
		/**
		 * @Description: 对文件的路径进行配置,创建一个虚拟路径/Path/** ，即只要在<img src="/Path/picName.jpg" />便可以直接引用图片
		 *这是图片的物理路径  "file:/+本地图片的地址"
		 * @Date： Create in 14:08 2017/12/20
		 */
		registry.addResourceHandler("/Path/**").addResourceLocations("file:/E:/WebPackage/IdeaProjects/shiroLearn/src/main/resources/static/");
		super.addResourceHandlers(registry);
	}


	@Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(clearTokenInteceptor()).addPathPatterns("/**");
    }
	
    @Bean
    public ClearTokenInteceptor clearTokenInteceptor(){
    	ClearTokenInteceptor clearTokenInteceptor = new ClearTokenInteceptor();
    	return clearTokenInteceptor;
    }
    
    
	@Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {

        FastJsonHttpMessageConverter  fastConverter = new FastJsonHttpMessageConverter ();

        FastJsonConfig fastJsonConfig = new FastJsonConfig();

        fastJsonConfig.setSerializerFeatures(
                SerializerFeature.PrettyFormat,SerializerFeature.WriteNullStringAsEmpty,
                SerializerFeature.DisableCircularReferenceDetect
        );

        
        List<MediaType> fastMediaTypes = new ArrayList<>();
        fastMediaTypes.add(MediaType.APPLICATION_JSON_UTF8);
        
        fastConverter.setFastJsonConfig(fastJsonConfig);
        fastConverter.setSupportedMediaTypes(fastMediaTypes);

        converters.add(fastConverter);
    }

	@Bean
	public FastJsonViewResponseBodyAdvice FastJsonViewResponseBodyAdvice(){
		FastJsonViewResponseBodyAdvice advice = new FastJsonViewResponseBodyAdvice();
		return advice;
	}
}

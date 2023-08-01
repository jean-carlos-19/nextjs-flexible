"use client";
import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { ProjectModel } from '@/models';
import { ProjectFormProps } from '@/types/component.types'
import { projectFormValidation } from '@/validation';
import { Button, CustomMenu, FormField, Poster } from '@/atomic/element'
import { useProjectForm } from './hooks'
import { categoryFilters } from '@/constant/data';

const ProjectForm = (props: ProjectFormProps) => {

  const { type, session,project } = props;
  const { entity,handleSend, urlImage, setUrlImage } = useProjectForm(session,project);
  return (
    <>
      {
        <Formik
          
          enableReinitialize={true}
          validationSchema={projectFormValidation}
          initialValues={entity as ProjectModel}
          onSubmit={function (values: ProjectModel, formikHelpers: FormikHelpers<ProjectModel>): void | Promise<any> {
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
            handleSend(values,formikHelpers,type,urlImage!,project?.image!)
          }}>

          {
            (props) => {
              const { values, isValid, handleBlur, handleChange, setFieldValue, handleSubmit,setValues } = props;
              return (
                <div className='flexStart form'>
                  <Poster
                    urlImage={urlImage as string}
                    setUrlImageLocal={setUrlImage}
                    id={'image'}
                    value={values.image}
                    type={type}
                    handleChange={(e: any) => {
                      setFieldValue('image', e.target.files[0])
                    }}
                    handleBlur={handleBlur("image")}
                  />
                  <FormField
                    title='Title'
                    placeholder={'Ej: Coffe App'}
                    value={values.title}
                    handleBlur={handleBlur("title")}
                    handleChange={handleChange("title")}
                  />
                  <FormField
                    title='Description'
                    placeholder={'Ej: Showcase and discover romakable developer projects'}
                    value={values.description}
                    handleBlur={handleBlur("description")}
                    handleChange={handleChange("description")}
                  />
                  <FormField
                    title='Website Url'
                    placeholder={'Ej: https://www.piguavesof.com'}
                    value={values.liveSiteUrl}
                    handleBlur={handleBlur("liveSiteUrl")}
                    handleChange={handleChange("liveSiteUrl")}
                  />
                  <FormField
                    title='Github Url'
                    placeholder={'Ej: https://github.com/jean-carlos-19'}
                    value={values.githubUrl}
                    handleBlur={handleBlur("githubUrl")}
                    handleChange={handleChange("githubUrl")}
                  />
                  {/* customInput Category */}
                  <CustomMenu
                    title={'Category'}
                    value={values.category}
                    filters={categoryFilters}
                    handleClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      setFieldValue("category", e.currentTarget.value)
                    }}
                    handleBlur={handleBlur("category")}
                  />
                  <div className="flexStart w-full">
                    <Button
                      title={!isValid? 
                          `${type === "create" ? "Creating":"Editing"}`
                        :
                          `${type === "create" ? "Create":"Edit"}`
                      }
                      disabled={!isValid}
                      leftIcon={!isValid? "" : "/plus.svg"}
                      handleClick={() => {
                        handleSubmit();
                      }}
                    >
                    </Button>
                  </div>

                </div>
              )
            }
          }
        </Formik>
      }
    </>
  )
}

export { ProjectForm }
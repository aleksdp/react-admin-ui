import React from 'react'
import styled from 'styled-components'
import {getEntity, getPrefix} from '../lib'
import {Divider, FlatButton} from 'material-ui'
import Back from 'material-ui/svg-icons/action/assignment-return'
import EntityForm from '../components/Sections/Content/EntityForm'
import queryString from 'query-string'
import {Link} from 'react-isomorphic-tools'
import {handleCreate, handleCreateSuccess, handleCreateFail} from '../actions'
import {HeaderWrapper, ContentWrapper} from '../components/Sections'

export default class Create extends React.Component {
    render() {
        const entity = getEntity(this.props.match.params.name)
        const {
            actions:{
                create:{
                    initialValues = {},
                    fields
                }
            }
        } = entity
        const prefix = getPrefix()
        const query = queryString.parse(this.props.location.search)
        return (
            <div>
                <HeaderWrapper>
                    <span className='title'>Create item of {entity.title || entity.name}</span>
                    <FlatButton
                        icon={<Back/>}
                        label='Back to list'
                        containerElement={<Link to={{pathname: `${prefix}/${entity.name}`, query}}/>}
                    />
                </HeaderWrapper>
                <Divider/>
                <EntityForm
                    onSubmit={handleCreate}
                    onSubmitSuccess={ handleCreateSuccess}
                    onSubmitFail={handleCreateFail}
                    initialValues={initialValues}
                    entity={entity}
                    form={entity.name}
                    submitLabel='Create'
                    query={query}
                    params={this.props.match.params}
                    prefix={prefix}
                    fields={fields}
                />
            </div>
        )
    }
}
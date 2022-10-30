import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {IssueService} from "../../../services";
import ReactMarkdown from 'react-markdown';

export default function IssueDetail() {
    const [loading, setLoading] = useState(false);
    const {number} = useParams();;
    const [issueDetail, setIssueDetail] = useState({
        title: undefined, created_at: undefined,
        comments: undefined, body: undefined,
        user: {
            login: undefined,
        },

    });

    useEffect(() => {
        async function getIssueDetail() {
            const response = await IssueService.getListIssueDetail(number);
            if (response.status === 200) {
                console.log(response.data);
                setIssueDetail(response.data);
            }
        }
        getIssueDetail();
    }, []);
    console.info('issueDetail', issueDetail.title);

    return (
        <div>
            <div style={styled.detailInfo}>
                <div>
                    {/*<img uri*/}
                    <h4>{`#${number} ${issueDetail.title}`}</h4>
                    <p>
                        <span>{`작성자: ${issueDetail?.user?.login}`}, </span>
                        <span>{`작성일: ${issueDetail.created_at}`}</span>
                    </p>
                </div>
                <div style={styled.comment}>{`코멘트: ${issueDetail.comments}`}</div>
            </div>
            <div>
                <ReactMarkdown>{issueDetail.body}</ReactMarkdown>
            </div>
        </div>
    )
};
const styled = {
    detailInfo: {
        backgroundColor: 'gray',
        display: 'flex',
        borderBottom: 'solid',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    comment: {
        padding: 40,
    }
}
